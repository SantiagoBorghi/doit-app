// src-tauri/src/app_lib/services/user_service.rs
use rusqlite::{params, Connection, Result};
use argon2::{self, Config};

pub fn register_user(conn: &Connection, username: &str, password: &str) -> Result<()> {
    let salt = b"randomsalt"; // Utiliza un salt generado de forma segura
    let config = Config::default();
    let hash = argon2::hash_encoded(password.as_bytes(), salt, &config)
        .expect("Failed to hash password");

    conn.execute(
        "INSERT INTO users (username, password_hash) VALUES (?1, ?2)",
        params![username, hash],
    )?;
    Ok(())
}

pub fn authenticate_user(conn: &Connection, username: &str, password: &str) -> bool {
    let mut stmt = conn.prepare("SELECT password_hash FROM users WHERE username = ?1")
        .expect("Failed to prepare statement");
    let stored_hash: String = stmt.query_row(params![username], |row| row.get(0))
        .unwrap_or_default();

    argon2::verify_encoded(&stored_hash, password.as_bytes()).unwrap_or(false)
}