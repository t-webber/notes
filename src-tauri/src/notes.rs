use std::fs;

#[derive(serde::Deserialize, serde::Serialize, Debug)]
pub struct Note {
    id: i32,
    title: String,
    content: String,
}

pub trait ToErrString<T> {
    fn to_err_string(self) -> Result<T, String>;
}

impl<T, E: ToString> ToErrString<T> for Result<T, E> {
    fn to_err_string(self) -> Result<T, String> {
        self.map_err(|err| err.to_string())
    }
}

const DB_PATH: &str = "./db.json";

#[tauri::command]
pub fn get_notes() -> Result<Vec<Note>, String> {
    if let Ok(content) = fs::read_to_string(DB_PATH) {
        serde_json::from_str(&content).to_err_string()
    } else {
        fs::OpenOptions::new()
            .create(true)
            .truncate(true)
            .write(true)
            .open(DB_PATH)
            .to_err_string()?;
        Err("Database not found".into())
    }
}

#[tauri::command]
pub fn write_notes(notes: Vec<Note>) -> Result<(), String> {
    // println!("{notes:?}");
    // dbg!(notes);
    // Ok(())
    if notes.is_empty() {
        Err("WRITING AN EMPTY ARRAY!".into())
    } else {
        fs::write(DB_PATH, serde_json::to_string(&notes).to_err_string()?).to_err_string()
    }
}
