// use chrono::NaiveDateTime;
use std::fs;
use std::io;
use std::io::Read;

#[derive(serde::Deserialize, serde::Serialize)]
pub struct Note {
    id: i32,
    title: String,
    content: String,
    // updated_at: NaiveDateTime,
}

const JSON_DB: &str = "./db.json";

#[tauri::command]
pub fn get_notes() -> Result<Vec<Note>, String> {
    let mut fd = fs::OpenOptions::new()
        .create(true)
        .truncate(true)
        .write(true)
        .read(true)
        .open(JSON_DB)
        .map_err(|err| err.to_string())?;
    let mut content = String::new();
    fd.read_to_string(&mut content)
        .map_err(|err| err.to_string())?;
    serde_json::from_str(&content).map_err(|err| err.to_string())
}
