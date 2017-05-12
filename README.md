# janif
An app for tracking scores in the card game Janif

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
