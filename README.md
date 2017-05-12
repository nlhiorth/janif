# janif
An app for tracking scores in the card game Janif

### Current players object
```javascript
players: [
  {
    id: 0,
    score: 51,
    name: 'Nils',
    banana: false,
    bean: true
  },
  {
    id: 1,
    score: 36,
    name: 'Chris',
    banana: true,
    bean: false
  }
]
```

### Data format for score updates
```javascript
scoreupdate: [
  {
    id: 0,
    score: 0,
    condition: 'janif'
  },
  {
    id: 1,
    score: 23,
    condition: null
  }
  {
    id: 2,
    score: -10,
    condition: 'win'
  },
  {
    id: 3,
    score: 26,
    condition: 'loss'
  }
]
```
