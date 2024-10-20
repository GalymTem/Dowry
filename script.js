document.getElementById('calculate').addEventListener('click', function() {
    let total = 100;

    const educationValue = parseFloat(document.getElementById('education').value);
    total *= educationValue;

    const netWorthValue = parseFloat(document.getElementById('netWorth').value);
    total *= netWorthValue;

    const casteValue = parseFloat(document.getElementById('caste').value);
    total += casteValue;

    const skills = [
        { id: 'musical', value: 10 },
        { id: 'cooking', value: 20 },
        { id: 'easygoing', value: 15 },
        { id: 'singing', value: 10 }
    ];
    
    skills.forEach(skill => {
        if (document.getElementById(skill.id).checked) {
            total += skill.value;
        }
    });

    const ageValue = document.querySelector('input[name="age"]:checked');
    if (ageValue) {
        total *= parseFloat(ageValue.value);
    }

    const reputationGossip = [
        { id: 'gossipParents', value: 0.85 },
        { id: 'gossipCharacter', value: 0.9 },
        { id: 'generalGossip', value: -20 }
    ];

    reputationGossip.forEach(gossip => {
        if (document.getElementById(gossip.id).checked) {
            total *= (gossip.value < 0 ? 1 : gossip.value);
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Estimated Dowry Price: $' + total.toFixed(2);
    resultDiv.style.color = total < 0 ? 'red' : 'green'; // Change text color based on value
});
