from io import StringIO, BytesIO
import pandas as pd
import fnmatch
import codecs
import string
import random
import pysftp
import warnings
import os

REMOTE_DIR = 'CustomData/Archived'
SFTP_HOST = os.environ['SFTP_HOST'].rstrip()
SFTP_USER = os.environ['SFTP_USER'].rstrip()
SFTP_PASSWORD = os.environ['SFTP_PASSWORD'].rstrip()


def get_sftp_connection():
    cnopts = pysftp.CnOpts()
    cnopts.hostkeys = None
    warnings.filterwarnings('ignore', '.*Failed to load HostKeys.*')
    return pysftp.Connection(host=SFTP_HOST, username=SFTP_USER, password=SFTP_PASSWORD, cnopts=cnopts)


def id_generator(size=8, chars=string.ascii_lowercase):
    return ''.join(random.choice(chars) for _ in range(size))


def download_data(f):
    with get_sftp_connection() as conn:
        filelist = [f for f in conn.listdir(REMOTE_DIR) if fnmatch.fnmatch(f, 'Meta*.*')] if conn else None
        filelist.sort()

        mdbody = StringIO()
        mdhead = StringIO()

        for file in filelist:
            print(file)

            try:
                flo = BytesIO()
                conn.getfo(f"{REMOTE_DIR}/{file}", flo)
                flo.seek(0)

                df = pd.read_csv(flo, sep=';')

                df = df.sort_values(by=['TekniskNavn'])
                df = df[['TekniskNavn', 'EgetNavn']]

                write_markdown(df, file, mdhead, mdbody)
            except Exception as e:
                print(e)
        return mdbody, mdhead


def write_markdown(df, file, head, body):
    file = file.replace('.csv', '').replace('Meta_', '')

    hook = id_generator()
    head.write(f"- [{file}](#{hook})\n")

    body.write(f"## <a id=\"{hook}\"> {file}</a> \n")
    body.write("<details>\n<summary>Vis tabel</summary>\n\n")
    df.to_markdown(buf=body, index=False)
    body.write("\n</details>\n<a href=\"#top\">:arrow_heading_up:</a>\n\n")  
    return body, head


def gen_documentation():
    f = codecs.open("docs/Data_i_Custom_Data.md", "w", "utf-8")
    f.write("## <a id=\"top\"> Data i Custom Data i KMD Insight</a>\n")

    body, head = download_data(f)
    print(head.getvalue(), file=f)
    print(body.getvalue(), file=f)

    f.close()


if __name__ == '__main__':
    gen_documentation()
