from fastapi import FastAPI


app = FastAPI(title="StudyFlow API")


@app.get("/")
def read_root() -> dict[str, str]:
	return {"status": "ok"}
