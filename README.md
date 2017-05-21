## Dark Room

This project uses Aframe and React to deliver a time-capped role-playing messaging game in WebVR. <br>
It is still currently in development, but a stable release will be made available at [Super Secret Banana](http://supersecretbanana.com/darkroom).

Dark Room is best viewed on Cardboard VR with headphones on for a complete immersive experience. <br>

## Contents

- [Messaging](#messaging)
  - [Speech to Text](#speech-to-text)
- [Gameplay](#gameplay)
  - [Initialize](#initialize)
  - [Rooms](#rooms)
- [Timer](#timer)                
- [Web VR](#web-vr)
  - [AFrame](#aframe)
  - [Cardboard](#cardboard)
- [Story](#story)
  - [Riddle](#riddle) 
- [Task List](#task-list)
  - [General](#general)
  - [Visual / UI](#visual)
  - [Interaction / Experience](#interaction)
- [C9 Git Guide](#c9-git-guide)
- [Additional Resources](#additional-resources)
 

### Messaging

Dark Room revolves around conversing with random strangers who are trapped with you while you are free to talk with them or
role-play based on the characters that have been randomly assigned to you. You can also choose to solve riddles by listening
to the story being narrated during the game. Solving the riddle unlocks certain elements within the 3D environment that can be
controlled by saying a specific keyword.

#### Speech to Text

Dark Room uses Google's Speech to Text API to allow the translation of mic input into displayed text on screen. Instead of users hearing
other user's voice, they will be seeing it as translated text on displayed on the environment. Fade transitions will be applied and certain
words that relate to the keyword clue will be highlighted to aid users in solving the riddle within the timeframe.

### Gameplay

#### Initialize

#### Rooms

Rooms are automatically created to accomodate two online users. They will be available for selection on the first thirty seconds of their creation. After that, 
they will be buried under a list that can still be selectable until the last half of the game (2:30) where it will be hidden until the game is over

### Timer

On user login, a five minute countdown starts. Once timer ends, the game is over. 

### Web VR

#### AFrame
    
#### Cardboard
    
### Story

#### Riddle

***

### Task List

### General

- [x] Move Dark Room to React
- [ ] Finalize Initial Game play
- [ ] Timer Component
- [ ] Functional Chat
- [ ] Speech to Text on Chat
- [ ] AFrame Integration
- [ ] Initial Asset Development, Management
- [ ] First Version Log on Wiki
- [ ] Management Timeline

### Visual / UI

- [x] Overall Visual Language
- [ ] Additional Illustrative Elements
- [ ] VR Elements
- [ ] Equirectangular Sky

### Interaction / Experience

- [ ] Defined Storyline
- [ ] Information Architecture for WebVR
- [ ] Interaction breakdown
- [ ] Riddle / Gameplay Component


## C9 Git Guide 
 
```
git add .
git commit -am "commit notes"
git push origin master
```
 
### Additional Resources


