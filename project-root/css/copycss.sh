#!/data/data/com.termux/files/usr/bin/bash

for file in about.css apply.css contact.css funding.css guidance.css legal.css marketing.css newsletter.css partnerships.css supportUs.css sustainability.css transparency.css; do
    cp home.css "$file"
done
