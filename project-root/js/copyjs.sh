#!/data/data/com.termux/files/usr/bin/bash

for file in about.js apply.js contact.js funding.js guidance.js legaljs marketing.js newsletter.js partnerships.js supportUs.js sustainability.js transparency.js; do
    cp home.js "$file"
done
