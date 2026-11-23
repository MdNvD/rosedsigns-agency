import subprocess
import os

def main():
    os.makedirs("screenshots", exist_ok=True)
    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not os.path.exists(chrome_path):
        chrome_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

    index_html = os.path.abspath("index.html")
    file_url = f"file:///{index_html.replace(os.sep, '/')}"

    print(f"Target URL: {file_url}")
    print(f"Browser binary: {chrome_path}")

    # 1. Desktop Above-The-Fold Preview (1920x1080)
    desktop_cmd = [
        chrome_path,
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--hide-scrollbars",
        "--virtual-time-budget=3000",
        "--window-size=1920,1080",
        "--screenshot=" + os.path.abspath("screenshots/desktop-preview.png"),
        file_url
    ]
    print("Capturing desktop viewport preview...")
    subprocess.run(desktop_cmd, check=True)

    # 2. Desktop Full Page (1440 wide, multi-section scroll)
    desktop_full_cmd = [
        chrome_path,
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--hide-scrollbars",
        "--virtual-time-budget=2000",
        "--window-size=1440,8400",
        "--screenshot=" + os.path.abspath("screenshots/desktop-fullpage.png"),
        file_url
    ]
    print("Capturing desktop full page...")
    subprocess.run(desktop_full_cmd, check=True)

    # 3. Mobile Viewport Preview (504x900)
    mobile_cmd = [
        chrome_path,
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--hide-scrollbars",
        "--virtual-time-budget=2000",
        "--window-size=504,900",
        "--screenshot=" + os.path.abspath("screenshots/mobile-preview.png"),
        file_url
    ]
    print("Capturing mobile viewport preview...")
    subprocess.run(mobile_cmd, check=True)

    # 4. Mobile Full Page (504 wide, multi-section scroll)
    mobile_full_cmd = [
        chrome_path,
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--hide-scrollbars",
        "--virtual-time-budget=2000",
        "--window-size=504,9800",
        "--screenshot=" + os.path.abspath("screenshots/mobile-fullpage.png"),
        file_url
    ]
    print("Capturing mobile full page...")
    subprocess.run(mobile_full_cmd, check=True)

    print("All screenshots captured successfully!")

if __name__ == "__main__":
    main()
