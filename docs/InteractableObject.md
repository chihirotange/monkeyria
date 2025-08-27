# 🛠️ InteractableObject System

This document describes the design and usage of the interactable object system, focusing on the `InteractableObject`, `PeriodInteractableObject`, and `InstantInteractableObject` classes.

---

## 📖 Overview

The interactable object system provides a flexible framework for creating objects in the game world that can interact with `Character` instances.  
It supports both **instant** and **periodic** interactions, allowing for a wide range of gameplay mechanics.

---

## 🧩 InteractableObject

### 📝 Description

`InteractableObject` is an **abstract base class** for all interactable objects.  
It manages collision detection with characters and tracks which characters are currently interacting with it.

### ✨ Key Features

- **Collision Handling:**  
  Uses a `Collider2D` to detect when a `Character` enters or leaves its area.
- **Interacting Characters:**  
  Maintains a set of currently interacting characters using `SetWithEvents`.
- **Event Hooks:**  
  Provides hooks (`onInteractingCharacterAdded`, `onInteractingCharacterRemoved`) for subclasses to respond to characters starting or ending interaction.
- **Abstract Methods:**  
  Requires subclasses to implement `beginInteraction(character)` and `endInteraction(character)`.

### 🛠️ Usage

To create a custom interactable object, extend this class and implement the required abstract methods.

---

## ⚡ InstantInteractableObject

### 📝 Description

`InstantInteractableObject` is an **abstract subclass** of `InteractableObject` for objects that perform their interaction logic instantly when a character interacts.

### ✨ Key Features

- **Instant Interaction:**  
  Calls `onBeginInteraction(character)` and `onEndInteraction(character)` immediately when interaction starts or ends.
- **Abstract Hooks:**  
  Subclasses must implement `onBeginInteraction` and `onEndInteraction`.

### 🛠️ Usage

Use this class for objects like **switches, buttons, or pickups** that do not require periodic updates during interaction.

---

## ⏲️ PeriodInteractableObject

### 📝 Description

`PeriodInteractableObject` is an **abstract subclass** of `InteractableObject` for objects that require periodic processing while a character is interacting.

### ✨ Key Features

- **Periodic Processing:**  
  Schedules a callback at a configurable interval (`period` property) for each interacting character.
- **Abstract Hook:**  
  Subclasses must implement `processInterval(character)` to define what happens each period.
- **Automatic Scheduling:**  
  Starts and stops the periodic callback automatically when interaction begins or ends.

### 🛠️ Usage

Use this class for objects like **resource bins, crafting stations, or unlock pads** that require repeated actions while a character is interacting.

---

## 💡 Example Usage

```typescript
// Example: Custom interactable that gives coins instantly
class CoinPickup extends InstantInteractableObject {
    onBeginInteraction(character: Character) {
        character.getInventory().addCoins(1);
        this.node.destroy();
    }
    onEndInteraction(character: Character) {}
}

// Example: Custom interactable that processes over time
class UnlockPad extends PeriodInteractableObject {
    processInterval(character: Character) {
        // Custom logic for unlocking
    }
}
```