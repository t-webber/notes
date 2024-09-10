# Notes app for Desktop and Android with connexion to a distant server

## Notes for this project

The `.env` file should look like:

```toml
POSTGRESQL_USERNAME="postgres"
POSTGRESQL_PASSWORD="somepassword"
```

## Notes for setting up Tauri + Vite + React for Android and Desktop

### Run on desktop

```shell
npm i 
npm tauri dev
```

### Run on android

Check your device is connected and ready with `adb devices`.

```shell
npm i
npm tauri android init
npm tauri android run
```

### Reminder for setups

#### Android Studio

- Can be installed in portalbe.
- Run `Android Studio` as administrator for the setup.
- See on the tauri website for the environment variables.

#### `error sending request for url`

- Replace `localhost` in `src-tauri\tauri.conf.json` by the LAN IP address (the one in `192.168.1.x` - most of the time given by `npm run`)
- Make sure it is on the same port than the one used by the front-end.

#### No device found with `adb devices`

- Deactivate/Reactivate developper options on your phone.
- Enable USB debugging for this computer.
- Kill and restart `adb kill-server`.

#### Package.json

Add the `tauri` command and expose the `dev` command (for `vite`, add the `--host` switch). The file should look like this:

```json
...
    "scripts": {
       "dev": "vite --host",
       "tauri": "tauri",
...
```
