// @ts-ignore
import { listenAddList, displaySavedList } from "./displayList.ts";

document.addEventListener("DOMContentLoaded", () => {
  displaySavedList();
});

document.querySelector("#person").addEventListener("submit", (event) => {
  event.preventDefault();

  const inputs = [
    ...(event.srcElement as HTMLElement).querySelectorAll("input"),
  ];
  const person = {};

  inputs.forEach((input) => {
    person[input.name] = input.value;
  });

  listenAddList(person);
});
