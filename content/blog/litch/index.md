---
title: Litch - Building a 2D Java Game Engine from Scratch
description: A progress update and roadmap for Litch, my custom 2D game engine and framework built with LWJGL in Java.
tags:
    - java
    - lwjgl
    - game-engine
    - 2d
    - devlog
date: 2025-07-01
author: Riley
---

# Litch – Building a 2D Java Game Engine from Scratch

**Litch** is my personal project: a 2D game engine and framework written in Java, using [LWJGL](https://www.lwjgl.org/) for OpenGL rendering.  
The goal is to create a flexible, modular engine for learning, prototyping, and eventually building full games.

---

## ✅ What’s Finished

- **Window & Rendering Core:**
    - Window/context creation with LWJGL.
    - Main game loop and timing.
    - Primitive shape renderer (rectangles, lines, circles).
- **Basic UI System:**
    - Text rendering (bitmap fonts).
    - Image/sprite rendering for UI elements.
- **Entity-Component System (ECS):**
    - Scene management.
    - Entity and component registration.
    - Basic transform and rendering components.
- **Input Handling:**
    - Keyboard and mouse input support.

---

## 🛠️ In Progress

- **Scene Serialization:**
    - Saving/loading scenes and entities.
- **Component System Expansion:**
    - More built-in components (physics, animation, etc.).
- **UI Improvements:**
    - More widgets and layout options.
- **Resource Management:**
    - Texture, font, and asset loading/management.

---

## 📝 TODO / Roadmap

- [ ] Sprite and animation system
- [ ] Physics integration (Box2D)
- [ ] Audio playback and management
- [ ] Game state management (menus, pause, etc.)
- [ ] Documentation and code samples (in progress)
- [ ] Demo game(s) to showcase engine features (in progress)

---

## Final Thoughts

Litch is a work-in-progress, but already supports basic 2D rendering, UI, and an ECS architecture.  
I’m using it as a learning platform and a foundation for future games.  
**Contributions, feedback, and ideas are welcome!**

Check out the code and follow progress on [GitHub](https://github.com/CodeByRiley/LitchJava).

---

_Stay tuned for more updates as Litch evolves!_
