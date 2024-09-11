mod notes;
use notes::get_notes;

#[tauri::command]
fn my_custom_command() -> String {
    println!("I was invoked from JS!");
    return String::from("My god it works");
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![my_custom_command, get_notes])
        .plugin(tauri_plugin_sql::Builder::default().build())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
