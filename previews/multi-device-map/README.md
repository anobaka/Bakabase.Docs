# Multi-device README preview

The Chinese and English images in `imgs/v24/multi-device-map-*.jpg` use the
application's real `DeviceMapCanvas`, device glyphs, relationship badges, theme
and translations. The surrounding explanatory panel is an illustrative layout,
not another application screen. All device names and media categories are fictional.

The gaming PC is the current device. It manages both servers and has separately
authorized two-way management and definitions synchronization with the MacBook.
The example also assumes the MacBook paired with each server independently;
those connections are outside the current device's view and are not drawn.
No link grants transitive management. No line represents copying media files.

## Recreate the image

1. Have a Bakabase checkout with its `src/web` dependencies installed using the
   application's normal Yarn workflow. The original preview used revision
   `5841c99fe61105dded165f6ea68fcffea4654df8`.
2. In this directory, link those dependencies (replace the absolute path):

   ```sh
   ln -s /absolute/path/to/Bakabase/src/web/node_modules node_modules
   BAKABASE_CHECKOUT=/absolute/path/to/Bakabase node node_modules/vite/bin/vite.js
   ```

3. Open `http://127.0.0.1:51864/` for Chinese, or add `?lang=en` for English.
4. Capture the `main` element at its native width of 1200 CSS pixels, including
   its full height. The checked-in JPEG images are 1200 × 829 (Chinese) and
   1200 × 823 (English). Review both languages after changes to application styles.

This is a loopback-only static mock. It imports no API client and does not
discover, pair with or change any real device. Clicking diagram controls does
nothing; the image is for documentation. Vite and its cache stay in this directory.
No application build, backend service or Docker restart is required.
