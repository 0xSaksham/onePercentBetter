# 1% Better - Habit Building Platform with ELIZA Integration

## Overview
1% Better is a blockchain-powered habit-building platform that combines smart contract technology with AI-driven conversational support. The platform helps users build consistent habits through daily 1% improvements, rewarding them with $HABIT tokens for maintaining streaks while providing emotional support through an ELIZA-style AI framework.

## Features
- 🎯 Smart Goal Setting & Tracking
- 🤖 AI-Powered Progress Adjustment
- 💰 Blockchain-Based Rewards ($HABIT tokens)
- 🗣️ ELIZA Framework Integration
- 📊 Progress Analytics
- 🏆 21-Day Streak Challenges

## Technical Architecture

### Smart Contracts
The platform utilizes two main Starknet smart contracts written in Cairo:

1. `HabitReward.cairo`: Handles streak tracking and token rewards
2. `HabitRewardWithEliza.cairo`: Integrates ELIZA framework with habit tracking

### Token Economics
- Token: $HABIT
- Reward: 1 $HABIT token per completed 21-day streak
- Network: Starknet

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/1percent-better.git

# Install dependencies
cd 1percent-better
scarb build

# Deploy contracts
starknet deploy --contract HabitRewardWithEliza.cairo
```

## Usage

### Smart Contract Interaction

```python
# Initialize contract
contract = await HabitRewardWithEliza.deploy(owner_address)

# Daily check-in with reflection
await contract.check_in_with_reflection(mood="motivated", reflection="Made progress today!")

# Check streak
streak = await contract.get_streak(user_address)

# Claim reward
await contract.claim_reward()
```

### Frontend Integration

```typescript
// Initialize the habit tracker
const habitTracker = new HabitTrackerWithEliza({
    contractAddress: "YOUR_CONTRACT_ADDRESS"
});

// Perform daily check-in
await habitTracker.checkInWithReflection({
    mood: "motivated",
    reflection: "Successfully completed my daily task!"
});
```

## Smart Contract Functions

### Core Functions
- `check_in_with_reflection`: Daily habit check-in with mood tracking
- `claim_reward`: Claim $HABIT tokens for completed streaks
- `get_streak`: View current streak length
- `get_personalized_motivation`: Get AI-generated motivation
- `request_advice`: Get contextual advice from ELIZA

### ELIZA Integration Functions
- `_generate_eliza_response`: Generate personalized responses
- `get_progress_analysis`: Analyze user progress and mood
- `set_goal`: Set personal goals

## Development

### Prerequisites
- Starknet CLI
- Scarb (Cairo package manager)
- Node.js v14+
- React v17+

### Environment Setup
```bash
# Create .env file
cp .env.example .env

# Configure environment variables
STARKNET_NETWORK=
CONTRACT_ADDRESS=
OWNER_ADDRESS=
```

### Testing
```bash
# Run smart contract tests
scarb test

# Run frontend tests
npm test
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security
- Smart contracts are pending audit
- Please report security vulnerabilities to security@1percentbetter.com

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contact
- Website: [1percentbetter.com](https://1percentbetter.com)
- Email: contact@1percentbetter.com
- Twitter: [@1percentbetter](https://twitter.com/1percentbetter)

## Acknowledgments
- OpenZeppelin for smart contract libraries
- Starknet team for blockchain infrastructure
- ELIZA framework contributors

## Roadmap
- [ ] Mobile app development
- [ ] Enhanced AI interactions
- [ ] Community features
- [ ] Token staking mechanism
- [ ] Integration with other wellness platforms

## Disclaimer
This is an experimental project. Use at your own risk. Token rewards are subject to network conditions and contract specifications.

---

**Note**: Replace placeholder URLs, addresses, and contact information with actual project details before publishing.

Made with ❤️ by the 1% Better Team
