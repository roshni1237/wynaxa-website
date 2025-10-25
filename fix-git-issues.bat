#!/bin/bash

# Wynaxa Website - Automated Fix Script
# This script fixes the Git push error and sets up proper .gitignore

echo "🚀 Wynaxa Website - Automated Fix Script"
echo "=========================================="
echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository. Please run this script from your project root."
    exit 1
fi

echo "Step 1: Backing up current state..."
git status > git-status-backup.txt
echo "✅ Backup created: git-status-backup.txt"
echo ""

echo "Step 2: Removing incorrect _gitignore file..."
if [ -f "_gitignore" ]; then
    rm _gitignore
    echo "✅ Removed _gitignore"
else
    echo "⚠️  _gitignore not found (this is okay)"
fi
echo ""

echo "Step 3: Creating proper .gitignore file..."
cat > .gitignore << 'EOF'
# Dependencies
node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/
.next

# Production
/build
dist

# Misc
.DS_Store
*.pem
.vscode

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.idea
*.swp
*.swo
*~
EOF
echo "✅ Created .gitignore"
echo ""

echo "Step 4: Removing node_modules from Git tracking..."
git rm -r --cached node_modules 2>/dev/null
if [ $? -eq 0 ]; then
    echo "✅ Removed node_modules from Git"
else
    echo "⚠️  node_modules already removed or not tracked"
fi
echo ""

echo "Step 5: Removing .next from Git tracking..."
git rm -r --cached .next 2>/dev/null
if [ $? -eq 0 ]; then
    echo "✅ Removed .next from Git"
else
    echo "⚠️  .next already removed or not tracked"
fi
echo ""

echo "Step 6: Staging changes..."
git add .gitignore
echo "✅ Staged .gitignore"
echo ""

echo "Step 7: Checking what will be committed..."
echo "Files to be removed from Git:"
git status --short | grep "^D"
echo ""
echo "Files to be added:"
git status --short | grep "^A"
echo ""

echo "Step 8: Committing changes..."
git commit -m "Fix: Remove node_modules and .next from Git, add proper .gitignore"
if [ $? -eq 0 ]; then
    echo "✅ Changes committed successfully"
else
    echo "⚠️  No changes to commit (this might be okay)"
fi
echo ""

echo "=========================================="
echo "✅ Fix completed successfully!"
echo ""
echo "Next steps:"
echo "1. Run: git push -u origin main"
echo "2. If push fails, check: git-status-backup.txt"
echo "3. Read: FIX_GUIDE.md for more improvements"
echo ""
echo "⚠️  IMPORTANT: Make sure node_modules is not pushed!"
echo "=========================================="