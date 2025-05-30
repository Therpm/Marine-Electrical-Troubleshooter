// Marine Electrical Troubleshooter App - Enhanced UI Display
document.addEventListener('DOMContentLoaded', function() {
    // App state
    let currentCategory = null;
    let currentIssue = null;
    let currentNode = null;
    let troubleshootingHistory = [];

    // DOM elements
    const categorySelection = document.getElementById('category-selection');
    const issueSelection = document.getElementById('issue-selection');
    const troubleshooter = document.getElementById('troubleshooter');
    const issueCategoryTitle = document.getElementById('issue-category-title');
    const issueList = document.getElementById('issue-list');
    const currentIssueTitle = document.getElementById('current-issue-title');
    const questionContainer = document.getElementById('question-container');
    const currentQuestion = document.getElementById('current-question');
    const answers = document.getElementById('answers');
    const diagnosisContainer = document.getElementById('diagnosis-container');
    const diagnosisResult = document.getElementById('diagnosis-result');
    const restartButton = document.getElementById('restart-button');
    const saveButton = document.getElementById('save-button');

    // Initialize the app
    initializeApp();

    function initializeApp() {
        // Verify troubleshooterData is loaded
        if (typeof troubleshooterData === 'undefined') {
            console.error("troubleshooterData is not defined! Check if troubleshooter-data.js is loaded correctly.");
            return;
        }

        // Set up category selection
        setupCategoryCards();
        
        // Set up back buttons
        setupBackButtons();
        
        // Set up restart button
        restartButton.addEventListener('click', function() {
            resetToCategories();
        });
        
        // Set up save button
        saveButton.addEventListener('click', function() {
            saveDiagnosis();
        });
        
        // Log initialization for debugging
        console.log("App initialized successfully");
        console.log("Categories loaded:", troubleshooterData.categories.length);
    }

    function setupCategoryCards() {
        const categoryCards = document.querySelectorAll('.category-card');
        
        console.log("Setting up category cards, found:", categoryCards.length);
        
        categoryCards.forEach(card => {
            const categoryId = card.getAttribute('data-category');
            
            // Remove any existing click listeners to prevent duplicates
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
            
            // Add click event listener using multiple methods for redundancy
            newCard.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log("Category clicked (onclick):", categoryId);
                selectCategory(categoryId);
                return false;
            };
            
            newCard.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log("Category clicked (addEventListener):", categoryId);
                selectCategory(categoryId);
            }, true);
            
            // Add explicit cursor style and hover effect to reinforce clickability
            newCard.style.cursor = 'pointer';
            
            // Add a direct click handler to the h3 and img elements as well
            const heading = newCard.querySelector('h3');
            const image = newCard.querySelector('img');
            
            if (heading) {
                heading.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Category heading clicked:", categoryId);
                    selectCategory(categoryId);
                    return false;
                };
            }
            
            if (image) {
                image.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Category image clicked:", categoryId);
                    selectCategory(categoryId);
                    return false;
                };
            }
        });
        
        console.log("Category cards setup complete");
    }

    function setupBackButtons() {
        const backButtons = document.querySelectorAll('.back-button');
        
        backButtons.forEach(button => {
            const target = button.getAttribute('data-target');
            
            button.addEventListener('click', function(e) {
                e.preventDefault();
                console.log("Back button clicked, target:", target);
                navigateToSection(target);
            });
        });
    }

    function selectCategory(categoryId) {
        // Find the selected category
        currentCategory = troubleshooterData.categories.find(category => category.id === categoryId);
        
        if (!currentCategory) {
            console.error("Category not found:", categoryId);
            return;
        }
        
        console.log("Selected category:", currentCategory.name);
        
        // Update the issue selection title
        issueCategoryTitle.textContent = `Select ${currentCategory.name} Issue`;
        
        // Populate the issue list
        populateIssueList(currentCategory.issues);
        
        // Show the issue selection section
        navigateToSection('issue-selection');
    }

    function populateIssueList(issues) {
        // Clear existing issues
        issueList.innerHTML = '';
        
        console.log("Populating issues:", issues.length);
        
        // Add each issue to the list
        issues.forEach(issue => {
            const issueItem = document.createElement('div');
            issueItem.className = 'issue-item';
            issueItem.innerHTML = `
                <h3>${issue.name}</h3>
                <p>${issue.description}</p>
            `;
            
            issueItem.addEventListener('click', function(e) {
                e.preventDefault();
                console.log("Issue clicked:", issue.id);
                selectIssue(issue.id);
            });
            
            // Add explicit cursor style
            issueItem.style.cursor = 'pointer';
            
            issueList.appendChild(issueItem);
        });
    }

    function selectIssue(issueId) {
        // Find the selected issue
        currentIssue = currentCategory.issues.find(issue => issue.id === issueId);
        
        if (!currentIssue) {
            console.error("Issue not found:", issueId);
            return;
        }
        
        console.log("Selected issue:", currentIssue.name);
        
        // Update the troubleshooter title
        currentIssueTitle.textContent = `Troubleshooting: ${currentIssue.name}`;
        
        // Start the troubleshooting process
        startTroubleshooting(issueId);
        
        // Show the troubleshooter section
        navigateToSection('troubleshooter');
    }

    function startTroubleshooting(issueId) {
        // Reset troubleshooting history
        troubleshootingHistory = [];
        
        // Get the decision tree for this issue
        const decisionTree = troubleshooterData.decisionTrees[issueId];
        
        if (!decisionTree) {
            console.error("Decision tree not found for issue:", issueId);
            showDiagnosis("We don't have a troubleshooting guide for this issue yet. Please check back later or contact a marine electrician for assistance.", "normal");
            return;
        }
        
        // Start at the beginning of the decision tree
        currentNode = decisionTree.start;
        
        if (!currentNode) {
            console.error("Start node not found in decision tree for issue:", issueId);
            showDiagnosis("Error in troubleshooting logic. Please start over or contact support.", "warning");
            return;
        }
        
        // Show the first question
        showQuestion(currentNode);
    }

    function showQuestion(node) {
        // Hide diagnosis container if visible
        diagnosisContainer.classList.add('hidden');
        
        // Show question container
        questionContainer.classList.remove('hidden');
        
        // Set the question text
        currentQuestion.textContent = node.question;
        
        // Clear existing answers
        answers.innerHTML = '';
        
        // Add each answer option
        node.answers.forEach(answer => {
            const answerButton = document.createElement('button');
            answerButton.className = 'answer-button';
            answerButton.textContent = answer.text;
            
            answerButton.addEventListener('click', function() {
                // Add to history
                troubleshootingHistory.push({
                    question: node.question,
                    answer: answer.text
                });
                
                console.log("Answer selected:", answer.text, "Next node:", answer.next);
                
                // Navigate to the next node
                navigateToNode(answer.next);
            });
            
            answers.appendChild(answerButton);
        });
    }

    function navigateToNode(nodeId) {
        // Get the decision tree for the current issue
        const decisionTree = troubleshooterData.decisionTrees[currentIssue.id];
        
        // Get the next node
        const nextNode = decisionTree[nodeId];
        
        if (!nextNode) {
            console.error("Node not found:", nodeId, "in decision tree for issue:", currentIssue.id);
            showDiagnosis("Error in troubleshooting logic. Please start over or contact support.", "warning");
            return;
        }
        
        // Check if this is a diagnosis node
        if (nextNode.diagnosis) {
            showDiagnosis(nextNode.diagnosis, nextNode.severity || "normal");
        } else {
            // Otherwise, it's another question
            currentNode = nextNode;
            showQuestion(nextNode);
        }
    }

    function showDiagnosis(diagnosisText, severity) {
        // Hide question container
        questionContainer.classList.add('hidden');
        
        // Show diagnosis container
        diagnosisContainer.classList.remove('hidden');
        
        // Set the diagnosis text with proper formatting for line breaks and contact info
        diagnosisResult.innerHTML = formatDiagnosisText(diagnosisText, severity);
        
        // Add the severity class
        diagnosisResult.className = 'diagnosis-result ' + severity;
        
        console.log("Showing diagnosis with severity:", severity);
    }
    
    function formatDiagnosisText(text, severity) {
        // Replace newlines with HTML line breaks
        let formattedText = text.replace(/\n/g, '<br>');
        
        // Highlight MD Marine Electric contact information in critical cases
        if (severity === 'critical' && formattedText.includes('CONTACT MD MARINE ELECTRIC')) {
            formattedText = formattedText.replace(
                /(⚠️ CONTACT MD MARINE ELECTRIC:.*?)(\nCall:.*?)(\nEmail:.*?)(\nWebsite:.*?)($|<br>)/g, 
                '<div class="contact-md-marine"><strong>$1</strong>$2$3$4$5</div>'
            );
        }
        
        // Highlight section headers
        formattedText = formattedText.replace(
            /(Immediate Actions:|Diagnostic Procedures:|Repair Options:|Preventative Maintenance:)/g,
            '<strong>$1</strong>'
        );
        
        return formattedText;
    }

    function navigateToSection(sectionId) {
        // Hide all sections
        categorySelection.classList.add('hidden');
        issueSelection.classList.add('hidden');
        troubleshooter.classList.add('hidden');
        
        // Show the target section
        document.getElementById(sectionId).classList.remove('hidden');
        
        console.log("Navigated to section:", sectionId);
    }

    function resetToCategories() {
        // Reset state
        currentCategory = null;
        currentIssue = null;
        currentNode = null;
        troubleshootingHistory = [];
        
        // Navigate back to category selection
        navigateToSection('category-selection');
        
        console.log("Reset to categories");
    }

    function saveDiagnosis() {
        // In a real app, this would save the diagnosis to local storage or a server
        // For the prototype, we'll just show an alert
        alert("Diagnosis saved! In the full version, this would save your troubleshooting session for future reference.");
    }
});
