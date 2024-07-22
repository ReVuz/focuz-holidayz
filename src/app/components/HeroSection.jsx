"use client";
import React from "react";
import { HeroParallax } from "../tsx-components/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Kerala,India",
    link : 'https://www.bing.com/ck/a?!&&p=2aa23cfeecd6bf71JmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTI2MQ&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=kerala&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2VyYWxh&ntb=1',
    thumbnail:
      "https://img.freepik.com/free-photo/view-green-palm-tree-species-with-beautiful-foliage_23-2151486421.jpg?ga=GA1.1.2011722593.1713692195&semt=sph",
  },
  {
    title: "India",
    link:'https://www.bing.com/ck/a?!&&p=9b57a77f019f3d82JmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTUxOQ&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=india&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW5kaWE&ntb=1',
    thumbnail:
      "https://img.freepik.com/premium-photo/decorated-archways-marking-entrance-procession-route-indian-background-concept_1022134-2537.jpg?ga=GA1.1.2011722593.1713692195&semt=ais_user",
  },
  {
    title: "Manhattan Bridge",
    link:'https://www.bing.com/ck/a?!&&p=78c08f6d2f2074e4JmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTI0OA&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=manhattan+bridge&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWFuaGF0dGFuX0JyaWRnZQ&ntb=1',
    thumbnail:
      "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?ga=GA1.1.2011722593.1713692195&semt=ais_user",
  },

  {
    title: "Statue of Liberty",
    link:'https://www.bing.com/ck/a?!&&p=e792fc42ac1776f0JmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTI0OA&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=statue+of+liberty&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3RhdHVlX29mX0xpYmVydHk&ntb=1',
    thumbnail:
      "https://img.freepik.com/free-photo/statue-liberty-new-york-city-skyline-usa_268835-777.jpg?ga=GA1.1.2011722593.1713692195&semt=ais_user",
  },
  {
    title: "Bali, Indonesia",
    link:'https://www.bing.com/ck/a?!&&p=20e34bb4dc0cc578JmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTI1OQ&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=bali&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFsaQ&ntb=1',
    thumbnail:
      "https://img.freepik.com/free-photo/big-entrance-gate-bali-indonesia_335224-376.jpg?ga=GA1.1.2011722593.1713692195&semt=sph",
  },
  {
    title: "Pura Ulun Danu Bratan",
    link:'https://www.bing.com/ck/a?!&&p=94c2ec45dbda1754JmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTU3Nw&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=Pura+Ulun+Danu+Bratan&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUHVyYV9VbHVuX0RhbnVfQnJhdGFu&ntb=1',
    thumbnail:
      "https://img.freepik.com/premium-photo/pura-ulun-danu-bratan_29505-234.jpg?ga=GA1.1.2011722593.1713692195&semt=sph",
  },

  {
    title: "Pura Ulun Danu Bratan",
    link:'https://www.bing.com/ck/a?!&&p=94c2ec45dbda1754JmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTU3Nw&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=Pura+Ulun+Danu+Bratan&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUHVyYV9VbHVuX0RhbnVfQnJhdGFu&ntb=1',
    thumbnail:
      "https://img.freepik.com/premium-photo/pura-ulun-danu-bratan_29505-234.jpg?ga=GA1.1.2011722593.1713692195&semt=sph",
  },
  {
    title: "Great Wall of China",
    link:'https://www.bing.com/ck/a?!&&p=186cc1013b8437cfJmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTI0Nw&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=great+wall+of+china&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JlYXRfV2FsbF9vZl9DaGluYQ&ntb=1',
    thumbnail:
      "https://img.freepik.com/premium-photo/china-great-wall-extending-mountains-winding_1359-2874.jpg?ga=GA1.1.2011722593.1713692195&semt=ais_user",
  },
  {
    title: "Asia",
    link:'https://www.bing.com/ck/a?!&&p=2c9ceb6047de6f55JmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTI0NQ&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=asia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQXNpYQ&ntb=1',
    thumbnail:
      "https://img.freepik.com/free-photo/trees-wild-falls-asian-saigon-famous_1417-1354.jpg?ga=GA1.1.2011722593.1713692195&semt=ais_user",
  },
  {
    title: "Italy",
    link:'https://www.bing.com/ck/a?!&&p=66777fdd315ed6ceJmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTI0Nw&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=italy&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSXRhbHk&ntb=1',
    thumbnail:
      "https://img.freepik.com/free-photo/beautiful-aerial-shot-florence-italy-architecture-evening_181624-2203.jpg?ga=GA1.1.2011722593.1713692195&semt=ais_user",
  },
  {
    title: "Rome,Italy",
    link:'https://www.bing.com/ck/a?!&&p=3588ec9555c39f13JmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTI1MQ&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=rome&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUm9tZQ&ntb=1',
    thumbnail:
      "https://img.freepik.com/free-photo/breathtaking-shot-colosseum-amphitheatre-located-rome-italy_181624-41196.jpg?ga=GA1.1.2011722593.1713692195&semt=ais_user",
  },

  {
    title: "Machu Picchu",
    link:'https://www.bing.com/ck/a?!&&p=c24d8298c8b0f8caJmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTI2Nw&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=machu+picchu&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWFjaHVfUGljY2h1&ntb=1',
    thumbnail:
      "https://img.freepik.com/free-photo/aerial-shot-beautiful-village-by-mountain-captured-machu-picchu-peru_181624-14674.jpg?ga=GA1.1.2011722593.1713692195&semt=ais_user",
  },
  {
    title: "Argentine Patagonia",
    link:'https://www.bing.com/ck/a?!&&p=6fe02aa0e21d3ecfJmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTI0MQ&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=Argentine+Patagonia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUGF0YWdvbmlh&ntb=1',
    thumbnail:
      "https://img.freepik.com/free-photo/beautiful-lake-before-mountains-covered-with-snow_8353-1133.jpg?ga=GA1.1.2011722593.1713692195&semt=ais_user",
  },
  {
    title: "Amalfi Coast, Italy",
    link:'https://www.bing.com/ck/a?!&&p=ae9c5cd7be4f8e17JmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTI1Ng&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=Amalfi+Coast%2c+Italy&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQW1hbGZpX0NvYXN0&ntb=1',
    thumbnail:
      "https://img.freepik.com/free-photo/lattari-mountains-regional-park-castellammare-italy-with-clear-blue-sky_181624-8885.jpg?ga=GA1.1.2011722593.1713692195&semt=ais_user",
  },
  {
    title: "Cancun, Mexico",
    link:'https://www.bing.com/ck/a?!&&p=eb15965485704b08JmltdHM9MTcyMTYwNjQwMCZpZ3VpZD0xOTBlZDk2MC0xMzQyLTYyZTQtMjBmMS1jZDNhMTJiNTYzN2UmaW5zaWQ9NTU4Ng&ptn=3&ver=2&hsh=3&fclid=190ed960-1342-62e4-20f1-cd3a12b5637e&psq=Cancun%2c+Mexico&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2FuYyVDMyVCQW4&ntb=1',
    thumbnail:
      "https://img.freepik.com/free-photo/breathtaking-view-pyramid-archaeological-site-chichen-itza-yucatan-mexico_181624-47577.jpg?ga=GA1.1.2011722593.1713692195&semt=ais_user",
  },
];
