// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function buttonOneClicked() {
  //This function does XXXX
  //Input through Textfields
  const example = parseFloat(document.getElementById("example").value)

  //Process
  const answer = example

  //Output
  document.getElementById("answer").innerHTML =
    "The answer is: " + answer.toFixed(2)
}

/**
 * Get API info.
 */
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getWeather = async (URLAddress) => {
  // This takes the weather from the API website, then placing it on my website
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("api-image").innerHTML =
      '<img src="https://openweathermap.org/img/wn/' +
      jsonData.weather[0].icon +
      '@2x.png" alt="api-given weather image">'
    document.getElementById("temperature").innerHTML =
      "<div>The temperature is: " +
      (parseFloat(jsonData.main.temp) - 273.15).toFixed(0) +
      "°C<div/>"
    document.getElementById("feels-like").innerHTML =
      "<div>It feels like: " +
      (parseFloat(jsonData.main.feels_like) - 273.15).toFixed(0) +
      "°C<div/>"
    document.getElementById("weather-description").innerHTML =
      "<div>Looks like: " + jsonData.weather[0].description + "<div/>"
  } catch (err) {
    console.log(err)
    document.getElementById("temperature").innerHTML = "Error"
  }
}

getWeather(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
