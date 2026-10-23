const moduleTooltips = {
    module1: `- Explain the purpose and use of variables, statements, outputs, and identifiers in Python.
- Construct and evaluate Python expressions to perform operations on numerical and string data.
- Write, modify, and test reusable functions to perform specific tasks in a program.
- Create loops that iterate a specified number of times using the range() function to automate repetitive tasks.`,

    module2: `- Write and evaluate Boolean expressions to represent logical conditions.
- Use decision statements (if, elif, else) to control program behavior based on conditions.
- Construct while loops to perform repetitive tasks efficiently.
- Implement interactive loops that respond to user input dynamically.`,

    module3: `- Manipulate strings through slicing, concatenation, formatting, and other common operations.
- Create, modify, and access elements in lists to store and manage collections of data.
- Use string and list operations to solve practical programming problems.`,

    module4: `- Review and apply key concepts related to Python's core data types.
- Create, manipulate, and unpack tuples for efficient data grouping and access.
- Use dictionaries to store, retrieve, and update key-value pairs.
- Read data from text files and write data to text files for storage and retrieval.
- Combine these skills to manage and process data effectively in Python programs.`,

    module5: `- Create and manipulate arrays to store and process numerical data.
- Perform indexing and slicing operations on arrays to access and modify data efficiently.
- Utilize NumPy functions to perform mathematical and statistical computations.
- Apply these skills to solve problems requiring numerical analysis and data processing.`,

    module6: `- Create and manipulate DataFrames to store and analyze tabular data.
- Perform indexing and slicing operations on DataFrames and Series.
- Apply operations on DataFrames and Series to filter, transform, and aggregate data.
- Use Pandas to solve practical problems involving structured datasets.`,

    module7: `- Create and customize plots using labels, legends, and other visual elements.
- Generate various types of plots, including line graphs, bar charts, scatter plots, and histograms.
- Plot data directly from Pandas Series and DataFrames for seamless integration.
- Use Matplotlib to effectively visualize data and communicate insights.`,

    module8: `- Understand K–means algorithm and application in data science 
- Implement K–means algorithm in Python using pandas for efficient computation `
};

document.addEventListener('DOMContentLoaded', function() {
    // Set up tooltip data
    document.querySelectorAll('.module-item').forEach(item => {
        const moduleId = item.getAttribute('data-module-id');
        if (moduleTooltips[moduleId]) {
            item.setAttribute('data-tooltip', moduleTooltips[moduleId]);
        }
        
        // For touch devices
        if ('ontouchstart' in window) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                // Toggle active class to show/hide tooltip
                this.classList.toggle('active');
                document.querySelectorAll('.module-item').forEach(otherItem => {
                    if (otherItem !== this) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        }
    });
    
    // Set up mouse tracking for tooltip positioning
    document.addEventListener('mousemove', e => {
        document.documentElement.style.setProperty('--x', (e.clientX + 15) + 'px');
        document.documentElement.style.setProperty('--y', (e.clientY - 15) + 'px');
    });
    
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    
    // Simulate terminal typing effect
    const titleElement = document.querySelector('h1');
    const originalTitle = titleElement.textContent;
    
    // Create a hidden span that reserves the space but is invisible
    const reserveSpan = document.createElement('span');
    reserveSpan.textContent = originalTitle;
    reserveSpan.style.visibility = 'hidden';
    reserveSpan.style.position = 'absolute';
    reserveSpan.style.pointerEvents = 'none';
    
    // Create the typing text span that will also contain the cursor
    const typingSpan = document.createElement('span');
    typingSpan.className = 'typing-text';
    
    // Clear the title element and add both spans
    titleElement.textContent = '';
    titleElement.appendChild(reserveSpan);
    titleElement.appendChild(typingSpan);
    
    function typeEffect(text, i = 0) {
        if (i < text.length) {
            // Update with current text plus cursor
            typingSpan.innerHTML = text.substring(0, i+1) + '<span class="terminal-cursor"></span>';
            i++;
            setTimeout(() => typeEffect(text, i), 100);
        } else {
            // When done typing, keep cursor at the end
            typingSpan.innerHTML = text + '<span class="terminal-cursor"></span>';
        }
    }
    
    setTimeout(() => {
        // Start with just the cursor
        typingSpan.innerHTML = '<span class="terminal-cursor"></span>';
        typeEffect(originalTitle);
    }, 1000);
    
    // Initialize the grid surge effect
    createGridSurgeEffect();
}); 