#[tauri::command]
pub fn my_custom_command() -> String {
    #[allow(clippy::print_stdout)]
    {
        println!("I was invoked from JS!");
    };
    String::from("My god it works")
}
