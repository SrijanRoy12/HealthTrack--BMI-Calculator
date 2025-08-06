    const developerBtn = document.querySelector('.developer-btn');
    const developerModal = document.querySelector('.developer-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    
    developerBtn.addEventListener('click', () => {
        developerModal.classList.add('active');
    });
    
    closeModalBtn.addEventListener('click', () => {
        developerModal.classList.remove('active');
    });
    
    developerModal.addEventListener('click', (e) => {
        if (e.target === developerModal) {
            developerModal.classList.remove('active');
        }
    });
    
let lastScrollPosition = 0;

const developerSection = document.querySelector('.developer-section');

window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > lastScrollPosition) {
        developerSection.style.top = '-70px';
    } else {
        developerSection.style.top = '20px';
    }
    
    lastScrollPosition = currentScrollPosition;
});

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const calculateBtn = document.getElementById('calculate-btn');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const heightUnit = document.getElementById('height-unit');
    const weightUnit = document.getElementById('weight-unit');
    const resultContainer = document.getElementById('result-container');
    const bmiResult = document.getElementById('bmi-result');
    const bmiCategory = document.getElementById('bmi-category');
    const categoryMarker = document.getElementById('category-marker');
    const recommendationsCard = document.getElementById('recommendations-card');
    const dietContent = document.getElementById('diet-content');
    const exerciseContent = document.getElementById('exercise-content');
    const tipsContent = document.getElementById('tips-content');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // BMI Categories
    const bmiCategories = [
        { name: 'Underweight', min: 0, max: 18.5, color: 'underweight-text' },
        { name: 'Normal weight', min: 18.5, max: 25, color: 'normal-text' },
        { name: 'Overweight', min: 25, max: 30, color: 'overweight-text' },
        { name: 'Obese', min: 30, max: 100, color: 'obese-text' }
    ];
    const recommendations = {
        underweight: {
            diet: [
                {
                    title: "Increase Caloric Intake",
                    description: "Consume 300-500 calories more than your daily requirement. Focus on nutrient-dense foods."
                },
                {
                    title: "Protein-Rich Foods",
                    description: "Include lean meats, fish, eggs, dairy, legumes, and nuts in your diet."
                },
                {
                    title: "Healthy Fats",
                    description: "Add avocados, nuts, seeds, and olive oil to your meals for extra calories."
                },
                {
                    title: "Frequent Meals",
                    description: "Eat 5-6 smaller meals throughout the day instead of 3 large ones."
                }
            ],
            exercise: [
                {
                    title: "Strength Training",
                    description: "Focus on compound exercises like squats, deadlifts, and bench press to build muscle."
                },
                {
                    title: "Limit Cardio",
                    description: "Reduce excessive cardio and focus more on resistance training."
                },
                {
                    title: "Progressive Overload",
                    description: "Gradually increase weights to stimulate muscle growth."
                }
            ],
            tips: [
                {
                    title: "Track Your Progress",
                    description: "Keep a food and exercise journal to monitor your gains."
                },
                {
                    title: "Be Patient",
                    description: "Healthy weight gain takes time - aim for 0.5-1 pound per week."
                },
                {
                    title: "Stay Hydrated",
                    description: "Drink plenty of water to support muscle growth and recovery."
                }
            ]
        },
        normal: {
            diet: [
                {
                    title: "Balanced Diet",
                    description: "Maintain a diet with 45-65% carbs, 20-35% fats, and 10-35% protein."
                },
                {
                    title: "Whole Foods",
                    description: "Focus on fruits, vegetables, whole grains, lean proteins, and healthy fats."
                },
                {
                    title: "Portion Control",
                    description: "Be mindful of portion sizes to maintain your current weight."
                },
                {
                    title: "Stay Hydrated",
                    description: "Drink at least 8 glasses of water daily."
                }
            ],
            exercise: [
                {
                    title: "Varied Routine",
                    description: "Include cardio, strength training, and flexibility exercises."
                },
                {
                    title: "150 Minutes Weekly",
                    description: "Aim for at least 150 minutes of moderate aerobic activity per week."
                },
                {
                    title: "Strength Training",
                    description: "Include resistance training 2-3 times per week."
                }
            ],
            tips: [
                {
                    title: "Maintain Consistency",
                    description: "Stick to your healthy habits to maintain your weight."
                },
                {
                    title: "Regular Check-ups",
                    description: "Monitor your BMI periodically to ensure you stay in the healthy range."
                },
                {
                    title: "Stress Management",
                    description: "Practice stress-reducing activities like meditation or yoga."
                }
            ]
        },
        overweight: {
            diet: [
                {
                    title: "Calorie Deficit",
                    description: "Reduce daily intake by 300-500 calories for gradual weight loss."
                },
                {
                    title: "High Protein",
                    description: "Increase protein intake to preserve muscle mass while losing fat."
                },
                {
                    title: "Fiber-Rich Foods",
                    description: "Eat plenty of vegetables, fruits, and whole grains to stay full."
                },
                {
                    title: "Limit Processed Foods",
                    description: "Reduce intake of sugary drinks, snacks, and fast food."
                }
            ],
            exercise: [
                {
                    title: "Cardiovascular Exercise",
                    description: "Aim for 30-60 minutes of moderate cardio most days."
                },
                {
                    title: "Strength Training",
                    description: "Include resistance training 2-3 times per week to maintain muscle."
                },
                {
                    title: "Increase Activity",
                    description: "Find ways to be more active throughout the day (walking, stairs, etc.)."
                }
            ],
            tips: [
                {
                    title: "Set Realistic Goals",
                    description: "Aim for 1-2 pounds of weight loss per week."
                },
                {
                    title: "Sleep Well",
                    description: "Get 7-9 hours of quality sleep to support weight loss."
                },
                {
                    title: "Mindful Eating",
                    description: "Pay attention to hunger cues and eat slowly."
                }
            ]
        },
        obese: {
            diet: [
                {
                    title: "Medical Supervision",
                    description: "Consult a doctor or dietitian for a personalized weight loss plan."
                },
                {
                    title: "Portion Control",
                    description: "Use smaller plates and measure portions to control intake."
                },
                {
                    title: "Nutrient-Dense Foods",
                    description: "Focus on vegetables, lean proteins, and whole grains."
                },
                {
                    title: "Limit Sugars and Fats",
                    description: "Reduce added sugars and unhealthy fats in your diet."
                }
            ],
            exercise: [
                {
                    title: "Start Slowly",
                    description: "Begin with low-impact activities like walking or swimming."
                },
                {
                    title: "Gradual Progression",
                    description: "Slowly increase duration and intensity of workouts."
                },
                {
                    title: "Professional Guidance",
                    description: "Consider working with a fitness professional for safe exercises."
                }
            ],
            tips: [
                {
                    title: "Medical Check-up",
                    description: "Get a full health assessment before starting any weight loss program."
                },
                {
                    title: "Behavioral Changes",
                    description: "Identify and address emotional eating patterns."
                },
                {
                    title: "Support System",
                    description: "Consider joining a support group or working with a health coach."
                }
            ]
        }
    };
    
    // Event Listeners
    calculateBtn.addEventListener('click', calculateBMI);
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            
            btn.classList.add('active');
            const tabName = btn.getAttribute('data-tab');
            document.querySelector(`.tab-content[data-tab="${tabName}"]`).classList.add('active');
        });
    });
    
    
    function calculateBMI() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Please enter valid height and weight values');
            return;
        }
        
        const heightInMeters = heightUnit.value === 'cm' ? height / 100 : height * 0.0254;
        const weightInKg = weightUnit.value === 'kg' ? weight : weight * 0.453592;
        
        const bmi = weightInKg / (heightInMeters * heightInMeters);
        const roundedBMI = Math.round(bmi * 10) / 10;
        
        bmiResult.textContent = roundedBMI;
        
        let category;
        for (const cat of bmiCategories) {
            if (roundedBMI >= cat.min && roundedBMI < cat.max) {
                category = cat;
                break;
            }
        }
        
        bmiCategory.textContent = category.name;
        bmiCategory.className = category.color;
        
        const markerPosition = Math.min(Math.max(roundedBMI, 15), 40); // Clamp between 15 and 40
        const percentage = ((markerPosition - 15) / (40 - 15)) * 100; // Scale to 0-100%
        categoryMarker.style.left = `${percentage}%`;
        
        resultContainer.style.display = 'block';
        
        
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Generate recommendations based on category
        generateRecommendations(category.name.toLowerCase().split(' ')[0]);
    }
    
    function generateRecommendations(category) {
        const categoryData = recommendations[category];
        
        dietContent.innerHTML = '';
        exerciseContent.innerHTML = '';
        tipsContent.innerHTML = '';
        
       
        categoryData.diet.forEach(item => {
            dietContent.appendChild(createRecommendationItem(item.title, item.description, 'utensils'));
        });
        
       
        categoryData.exercise.forEach(item => {
            exerciseContent.appendChild(createRecommendationItem(item.title, item.description, 'dumbbell'));
        });
        
        
        categoryData.tips.forEach(item => {
            tipsContent.appendChild(createRecommendationItem(item.title, item.description, 'lightbulb'));
        });
        
        
        recommendationsCard.style.display = 'block';
    }
    
    function createRecommendationItem(title, description, icon) {
        const item = document.createElement('div');
        item.className = 'recommendation-item';
        
        const iconElement = document.createElement('i');
        iconElement.className = `fas fa-${icon}`;
        
        const contentDiv = document.createElement('div');
        const titleElement = document.createElement('h4');
        titleElement.textContent = title;
        const descElement = document.createElement('p');
        descElement.textContent = description;
        
        contentDiv.appendChild(titleElement);
        contentDiv.appendChild(descElement);
        
        item.appendChild(iconElement);
        item.appendChild(contentDiv);
        
        return item;
    }
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.calculator-card, .recommendations-card, .info-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    document.querySelectorAll('.calculator-card, .recommendations-card, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
});
