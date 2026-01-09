### video for **Next.js oppgave 3.1 - Sanity tutorial** is stored in a private archive on GoogleDrive

# 📝 Note: .mht file opens as a blank page

If a downloaded `.mht / .mhtml` file opens as a **blank (white)** page in the browser, the file is most likely **not** broken.

This usually happens because the **line endings were converted to** `LF` during download (for example, when using Download ZIP from GitHub).

### ✅ How to fix it

1. Open the .mht file in VS Code
2. Look at the bottom-right corner of the editor
3. Click on `LF`
4. Change it to `CRLF`
5. Save the file

Reopen it in the browser. The content should display correctly.

### 🔒 Tip for Git repositories

To prevent this in the future, treat `.mht` files as binary in Git:

- Before pushing files to github  
  Create `.gitattributes` in project folder with code

```text
*.mht   -text
*.mhtml -text
```

- **If files already on github**: create `.gitattributes` as above and rebase files (make Git apply rules)

```bash
# 2. Переположить файлы (заставить Git применить правила)
git rm --cached -r .
git reset --hard
git add .
git commit -m "Treat .mht files as binary to preserve line endings"
```
