## :blue_heart: A Vkontakte Test Task :blue_heart:

### Check the :whale: [deployed version here](https://kibatensai.github.io/vk_test/) :whale:

#### :eyes: Looking forward for your feedback

---

### There's a dummy `keyboard access` realization

#### *Tab* - moves to the next element
#### *Enter* - opens popup and different tab. And prints the emoji, which is selected with *Tab* at the moment
#### *Esc* - closes the popup

---

#### :speech_balloon: `Input` component includes the main textarea and a popup, handled with boolean flag in useState

#### :smiley_cat: `EmojiPicker` component contains the main popup component with tabs for all emojis and recently used ones

#### :page_facing_up: `Tabs` component handles two tabs

#### :star: `EmojiTemplate` is a component for all the emojis (contains infinite scroll for performance optimization)

#### :cyclone: `RecentEmojis` is a component for recently used ones (25 max, replaces last emoji with the new one in the list if it is more than 25)

---

### I used following technologies here:
![TypeScript](https://img.shields.io/badge/-TypeScript-090909?style=for-the-badge&logo=TypeScript)
![ReactJS](https://img.shields.io/badge/-ReactJS-090909?style=for-the-badge&logo=React)
![Redux](https://img.shields.io/badge/-Redux-090909?style=for-the-badge&logo=Redux)
![SASS](https://img.shields.io/badge/-SASS-090909?style=for-the-badge&logo=Sass)
![MaterialUI](https://img.shields.io/badge/-MaterialUI-090909?style=for-the-badge&logo=Material-UI)
