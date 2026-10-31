# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1
- Tool(s): None
- What I asked for:
- What I kept, changed or rejected, and why:
- One thing the AI got wrong and how I fixed it:

## Week 2
- Tool(s):None
- What I asked for:
- What I kept, changed or rejected, and why:
- One thing the AI got wrong and how I fixed it:

## Week 3
- Tool(s):None
- What I asked for:
- What I kept, changed or rejected, and why:
- One thing the AI got wrong and how I fixed it:

## Week 4
- Tool(s): yes, Gemini

- What I asked for: I asked the AI how to complete Step B4, which is how to refactor my custom "Recently Viewed" feature from Week 3 so that it works with the new React Router and Context API structure.

- What I kept, changed or rejected, and why: I kept the AI's approach to move the recentlyViewed state into the CartProvider.jsx and wrap it in the useLocalStorage hook. I accepted this because the feature needs to be updated from the menu page but displayed on the Home page, making global Context the most efficient solution and also a local storage to ensure the history survives a page refresh.

- One thing the AI got wrong and how I fixed it: When rewriting App.jsx in the previous step, the AI entirely deleted my recentlyViewed state and handleViewItem function, temporarily breaking the feature. I fixed this by instructing the AI to proceed to B4, where we reconstructed the feature by creating an addViewedItem function inside the global Context and attaching it to the onClick event in MenuItemCard.jsx.