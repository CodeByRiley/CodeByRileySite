# rebase.ps1 - Fully clean and rebase a Nuxt 3 project folder

Write-Host "Cleaning Nuxt build artifacts..."
Remove-Item -Recurse -Force .nuxt, .output, .data, dist, temp -ErrorAction SilentlyContinue

Write-Host "Removing node_modules and lock files..."
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
Remove-Item -Force yarn.lock -ErrorAction SilentlyContinue

Write-Host "Reinstalling dependencies..."
npm install

Write-Host "Done! You can now run 'npm run dev' to start the dev server." 