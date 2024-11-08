import Predator as pd

p = print

web = pd.run(pd.WebApp().init())

class App:
    static_bytes = 1024
    pages = {
        "/": "./static/page/index.html"
    }
    file_server = None
    def __init__(app) -> None:
        pass

    async def static(app, r, page=None, static_bytes=None):
        if app.file_server is None:
            app.file_server = await pd.Static().init()

        async def build_page(page):
            if page is None:
                if (serve := r.params.get((arg := "serve"))):
                    page = "./static/%s" % (serve)
                else:
                    if r.tail in app.pages:
                        page = app.pages[r.tail]
                        
            r.page = page

        await build_page(page)
        return await app.file_server.static_file_server(r, r.page, serve_chunk=app.static_bytes)

app = App()

@web.route
async def handle_all(r):
    return await app.static(r)

if __name__ == "__main__":
    config = pd.MyDict()
    config.host = "0.0.0.0"
    config.port = "8000"
    web.runner(config)

