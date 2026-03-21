#!/usr/bin/env python3
"""
Quick HTML Div Balance Checker

This script finds unclosed divs by counting opening and closing tags.
It's much faster than manually checking because:
1. It reads the entire file at once
2. Uses regex to find all div tags in one pass
3. Compares counts instantly

Usage: python3 check_div_balance.py
"""

import re

def check_div_balance(file_path):
    """Check if div tags are balanced in an HTML file."""
    
    # Read the entire file
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Find all opening div tags: <div ... >
    # The pattern <div[^>]*> matches:
    # - <div (starts with <div)
    # - [^>]* (any characters except >, zero or more)
    # - > (ends with >)
    opens = re.findall(r'<div[^>]*>', content)
    
    # Find all closing div tags: </div>
    closes = re.findall(r'</div>', content)
    
    # Count them
    open_count = len(opens)
    close_count = len(closes)
    balance = open_count - close_count
    
    print(f"File: {file_path}")
    print(f"Opening divs: {open_count}")
    print(f"Closing divs: {close_count}")
    print(f"Balance: {balance}")
    
    if balance == 0:
        print("✅ All divs are balanced!")
    elif balance > 0:
        print(f"⚠️  {balance} unclosed div(s) found!")
    else:
        print(f"⚠️  {abs(balance)} extra closing div(s) found!")
    
    return balance

# Check specific sections
def check_section(file_path, start_marker, end_marker, section_name):
    """Check div balance in a specific section of the file."""
    
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    # Find the start and end lines
    start_line = None
    end_line = None
    
    for i, line in enumerate(lines, 1):
        if start_marker in line:
            start_line = i
        if end_marker in line and start_line:
            end_line = i
            break
    
    if not start_line:
        print(f"❌ Could not find start marker: {start_marker}")
        return
    
    if not end_line:
        # If no end marker, check next 1000 lines
        end_line = min(start_line + 1000, len(lines))
    
    # Extract the section
    section_text = ''.join(lines[start_line-1:end_line-1])
    
    # Count divs
    opens = len(re.findall(r'<div[^>]*>', section_text))
    closes = len(re.findall(r'</div>', section_text))
    balance = opens - closes
    
    print(f"\n{section_name}:")
    print(f"  Opens: {opens}, Closes: {closes}, Balance: {balance}")
    
    if balance != 0:
        print(f"  ⚠️ UNBALANCED!")
    else:
        print(f"  ✅ Balanced")
    
    return balance

if __name__ == "__main__":
    file_path = "index.html"
    
    # Check entire file
    print("=" * 50)
    print("CHECKING ENTIRE FILE")
    print("=" * 50)
    check_div_balance(file_path)
    
    # Check specific sections
    print("\n" + "=" * 50)
    print("CHECKING SPECIFIC SECTIONS")
    print("=" * 50)
    
    check_section(
        file_path,
        "<!-- Module 3: CONDITIONS Part 1 -->",
        "<!-- Module 3: CONDITIONS Part-2 -->",
        "Part 1"
    )
    
    check_section(
        file_path,
        "<!-- Module 3: CONDITIONS Part-2 -->",
        "<!-- Module 3: CONDITIONS PART-3 -->",
        "Part 2"
    )
    
    check_section(
        file_path,
        "<!-- Module 3: CONDITIONS PART-3 -->",
        "<section class=\"page\" id=\"conditions-4-module\">",
        "Part 3"
    )
