#![warn(
    clippy::all,
    clippy::pedantic,
    clippy::style,
    clippy::perf,
    clippy::complexity,
    clippy::correctness,
    clippy::restriction,
    clippy::nursery,
    // clippy::cargo
)]
#![feature(stmt_expr_attributes)]
#![allow(clippy::blanket_clippy_restriction_lints)]
#![allow(clippy::implicit_return)]
#![allow(clippy::single_call_fn)]
#![allow(clippy::string_add)]
#![allow(clippy::missing_docs_in_private_items)]
#![allow(clippy::question_mark_used)]
#![allow(clippy::mod_module_files)]
#![allow(clippy::exhaustive_structs)]
#![allow(clippy::arithmetic_side_effects)]

use std::sync::Mutex;
use tauri::{Builder, Manager, State};

mod notes;
mod tests;

use notes::{get_notes, write_notes, ToErrString};
use tests::my_custom_command;

#[derive(Default)]
struct AppState {
    counter: u32,
}

#[tauri::command]
fn increase_counter(state: State<'_, Mutex<AppState>>) -> Result<u32, String> {
    let mut state = state.lock().to_err_string()?;
    state.counter += 1;
    Ok(state.counter)
}

#[allow(
    clippy::restriction,
    clippy::missing_panics_doc,
    clippy::str_to_string,
    clippy::exit
)]
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    Builder::default()
        .setup(|app| {
            app.manage(Mutex::new(AppState::default()));
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            my_custom_command,
            get_notes,
            increase_counter,
            write_notes
        ])
        .plugin(tauri_plugin_sql::Builder::default().build())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
