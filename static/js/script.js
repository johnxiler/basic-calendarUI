// Check if the modal should be shown
function shouldShowModal() {
  // Use localStorage to check if the modal has been shown before
  return localStorage.getItem('modalShown') !== 'true';
}

// Set the flag indicating that the modal has been shown
function setModalShown() {
  localStorage.setItem('modalShown', 'true');
}
// Modal object
var modal = {
  open: function () {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
  },
  close: function () {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  },
  // Update the "submit" function in the modal object
  submit: function () {
    handleAddEdit();
  },
  // Open the "daycard-details" modal
  openDaycardDetails: function () {
    var daycardDetails = document.getElementById('daycard-details');
    daycardDetails.style.display = 'flex';
  },

  // Close the "daycard-details" modal
  closeDaycardDetails: function () {
    var daycardDetails = document.getElementById('daycard-details');
    daycardDetails.style.display = 'none';
  },
  clear: function () {
    // Clear input values
    document.getElementById('title').value = '';
    document.getElementById('start-date').value = '';
    document.getElementById('end-date').value = '';
    document.getElementById('notes').value = '';
  },
  edit: function (dayNumber, eventIndex) {
    // Retrieve events from localStorage
    const events = JSON.parse(localStorage.getItem('events')) || [];

    // Find the event for the selected day
    const selectedEvent = events.find(event => {
      const eventDate = new Date(event.startDate);
      return eventDate.getDate() === dayNumber;
    });
    if (selectedEvent) {
      // Populate the modal fields with existing data for editing
      document.getElementById('title').value = selectedEvent.title;
      document.getElementById('start-date').value = selectedEvent.startDate;
      document.getElementById('end-date').value = selectedEvent.endDate;
      document.getElementById('notes').value = selectedEvent.notes;
      // Open the modal
      this.open();
    } else {
      // Display a message or handle the case where no event is found for the selected day
      console.log("No event found for the selected day");
    }
    // Open the modal
    // this.open();
  },

  // edit: function (dayNumber, eventIndex) {
  //   // Retrieve events from localStorage
  //   const events = JSON.parse(localStorage.getItem('events')) || [];

  //   // Find the event for the selected day
  //   const selectedEvent = events.find(event => {
  //     const eventDate = new Date(event.startDate);
  //     return eventDate.getDate() === dayNumber;
  //   });

  //   if (selectedEvent) {
  //     // Populate the modal fields with existing data for editing
  //     document.getElementById('title').value = selectedEvent.title;
  //     document.getElementById('start-date').value = selectedEvent.startDate;
  //     document.getElementById('end-date').value = selectedEvent.endDate;
  //     document.getElementById('notes').value = selectedEvent.notes;

  //     // Open the modal
  //     this.open();
  //   } else {
  //     // Display a message or handle the case where no event is found for the selected day
  //     console.log("No event found for the selected day");
  //   }
  // },


  //   // Delete the event for the selected day
  //   delete: function () {
  //     // Retrieve events from localStorage
  //     const events = JSON.parse(localStorage.getItem('events')) || [];

  //     // Retrieve the day number from the modal content
  //     const dayNumberElement = document.querySelector('.edit-title');
  //     if (dayNumberElement) {
  //       const dayNumber = parseInt(dayNumberElement.dataset.dayNumber);

  //       // Find the index of the event for the selected day
  //       const eventIndex = events.findIndex(event => {
  //         const eventDate = new Date(event.startDate);
  //         return eventDate.getDate() === dayNumber;
  //       });

  //       // Remove the event from the array
  //       if (eventIndex !== -1) {
  //         events.splice(eventIndex, 1);

  //         // Save the updated list of events in localStorage
  //         localStorage.setItem('events', JSON.stringify(events));

  //         // Display the list of days with events
  //         displayEventList();

  //         // Update the day card color to indicate no data
  //         updateDayCardColor(dayNumber);

  //         // Close the modal after deletion
  //         this.closeDaycardDetails();
  //       } else {
  //         console.log("No event found for the selected day");
  //       }
  //     } else {
  //       console.log("No day number found in modal content");
  //     }
  //   },
  // };
  //   // Delete the event for the selected day
  //   delete: function () {
  //     // Retrieve events from localStorage
  //     const events = JSON.parse(localStorage.getItem('events')) || [];

  //     // Retrieve the day number from the modal content
  //     const dayNumberElement = document.querySelector('.edit-title');
  //     if (dayNumberElement) {
  //       const dayNumber = parseInt(dayNumberElement.dataset.dayNumber);

  //       // Find the index of the event for the selected day
  //       const eventIndex = events.findIndex(event => {
  //         const eventDate = new Date(event.startDate);
  //         return eventDate.getDate() === dayNumber;
  //       });

  //       // Remove the event from the array
  //       if (eventIndex !== -1) {
  //         events.splice(eventIndex, 1);

  //         // Save the updated list of events in localStorage
  //         localStorage.setItem('events', JSON.stringify(events));

  //         // Display the list of days with events
  //         displayEventList();

  //         // Update the day card color to indicate no data
  //         updateDayCardColor(dayNumber);

  //         // Close the modal after deletion
  //         this.closeDaycardDetails();

  //         // Update the schedule-display after deletion
  //         updateCalendar();
  //       } else {
  //         console.log("No event found for the selected day");
  //       }
  //     } else {
  //       console.log("No day number found in modal content");
  //     }
  //   },
  // };
  // Delete the event for the selected day
  delete: function () {
    // Retrieve events from localStorage
    const events = JSON.parse(localStorage.getItem('events')) || [];

    // Retrieve the day number from the modal content
    const dayNumberElement = document.querySelector('.edit-title');
    if (dayNumberElement) {
      const dayNumber = parseInt(dayNumberElement.dataset.dayNumber);

      // Find the index of the event for the selected day
      const eventIndex = events.findIndex(event => {
        const eventDate = new Date(event.startDate);
        return eventDate.getDate() === dayNumber;
      });

      // Remove the event from the array
      if (eventIndex !== -1) {
        events.splice(eventIndex, 1);

        // Save the updated list of events in localStorage
        localStorage.setItem('events', JSON.stringify(events));

        // Display the list of days with events
        displayEventList();

        // Update the day card color to indicate no data
        updateDayCardColor(dayNumber);

        // Close the modal after deletion
        this.closeDaycardDetails();

        // Update the schedule-display after deletion
        displayEventList(dayNumber);
      } else {
        console.log("No event found for the selected day");
      }
    } else {
      console.log("No day number found in modal content");
    }
  },
};

// Additional functionality for buttons (Add, Edit, Delete, Cancel)
document.getElementById('add-btn').addEventListener('click', function () {
  console.log('Add button clicked'); // Add this line
  modal.clear(); // Clear previous data
  modal.open();
  setModalShown(); // Set the flag when the modal is closed
});
// document.getElementById('edit-btn').addEventListener('click', function () {
//   console.log('Edit button clicked'); // Add this line
//   modal.edit();

// });
document.getElementById('edit-btn').addEventListener('click', function () {
  const selectedCheckbox = document.querySelector('.event-checkbox:checked');

  if (selectedCheckbox) {
    const eventIndex = parseInt(selectedCheckbox.dataset.eventIndex);
    modal.edit(eventIndex);
  } else {
    console.log('Edit button clicked');
    modal.edit();
  }
});
// Add an event listener for the delete button
document.querySelector('.delete-btn').addEventListener('click', function () {
  console.log('Delete button clicked');
  modal.delete();
});
// document.getElementById('delete-btn').addEventListener('click', function () {
//   console.log('Delete button clicked'); // Add this line
//   modal.delete(); // delete previous data
//   // modal.open();
//   setModalShown(); // Set the flag when the modal is closed
// });


//Calendar Display//
// Function to generate month and year dropdown
function generateMonthYearDropdown() {
  const dropdownContainer = document.getElementById('month-year-dropdown');
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dropdownHTML = `
    <select id="month-dropdown">
      ${months.map((month, index) => `<option value="${index}" ${index === currentMonth ? 'selected' : ''}>${month}</option>`).join('')}
    </select>
    <select id="year-dropdown">
      ${Array.from({ length: 7 }, (_, i) => currentYear + i).map(year => `<option value="${year}" ${year === currentYear ? 'selected' : ''}>${year}</option>`).join('')}
    </select>
  `;
  dropdownContainer.innerHTML = dropdownHTML;
  // Add event listeners to both dropdowns
  const monthDropdown = document.getElementById('month-dropdown');
  const yearDropdown = document.getElementById('year-dropdown');
  monthDropdown.addEventListener('change', updateCalendar);
  yearDropdown.addEventListener('change', updateCalendar);
  // Call the updateCalendar function to initialize the calendar
  updateCalendar();
  // Display the current month and year on the page
  displayCurrentMonthYear(currentMonth, currentYear);
}
// // Function to display the full details of an event in a modal
// function displayEventDetailsModal(event) {
//   const modalContent = document.getElementById('daycard-details');
//   modalContent.innerHTML = `
//     <h3>Event Details:</h3>
//     <p><strong>Title:</strong> ${event.title}</p>
//     <p><strong>Start Date:</strong> ${event.startDate}</p>
//     <p><strong>End Date:</strong> ${event.endDate}</p>
//     <p><strong>Notes:</strong> ${event.notes}</p>
//   `;
//   // Open the modal
//   modal.openDaycardDetails();
// }

// function updateCalendar() {
//   const monthDropdown = document.getElementById('month-dropdown');
//   const yearDropdown = document.getElementById('year-dropdown');
//   const selectedMonth = parseInt(monthDropdown.value);
//   const selectedYear = parseInt(yearDropdown.value);

//   const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

//   // Clear existing day cards
//   const weekContainer = document.querySelector('.week-container');
//   weekContainer.innerHTML = '';

//   // Generate new day cards based on the selected month and year
//   const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
//   const currentDate = new Date();

//   for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
//     const dayCard = document.createElement('div');
//     dayCard.className = 'day-card';

//     // Highlight the current date
//     if (dayNumber === currentDate.getDate() && selectedMonth === currentDate.getMonth() && selectedYear === currentDate.getFullYear()) {
//       dayCard.classList.add('current-date');
//     }

//     // Add click event listener to each day card
//     dayCard.addEventListener('click', function () {
//       displayEventDetails(dayNumber);
//     });
//     dayCard.innerHTML = `
//       <div class="day-number">${dayNumber}</div>
//       <div class="day-name">${getDayName((new Date(selectedYear, selectedMonth, dayNumber)).getDay())}</div>
//     `;
//     weekContainer.appendChild(dayCard);
//   }

//   // Update the displayed current month and year
//   displayCurrentMonthYear(selectedMonth, selectedYear);
// }

function updateCalendar() {
  const monthDropdown = document.getElementById('month-dropdown');
  const yearDropdown = document.getElementById('year-dropdown');
  const selectedMonth = parseInt(monthDropdown.value, 10); // Specify radix 10 for parseInt
  const selectedYear = parseInt(yearDropdown.value, 10); // Specify radix 10 for parseInt

  const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  // Clear existing day cards
  const weekContainer = document.querySelector('.week-container');
  weekContainer.innerHTML = '';

  // Generate new day cards based on the selected month and year
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const currentDate = new Date();

  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';

    // Highlight the current date
    if (dayNumber === currentDate.getDate() && selectedMonth === currentDate.getMonth() && selectedYear === currentDate.getFullYear()) {
      dayCard.classList.add('current-date');
    }

    // Add click event listener to each day card
    dayCard.addEventListener('click', function () {
      displayEventDetails(dayNumber);
    });

    // Use template literals for better readability
    dayCard.innerHTML = `
      <div class="day-number">${dayNumber}</div>
      <div class="day-name">${getDayName((new Date(selectedYear, selectedMonth, dayNumber)).getDay())}</div>
    `;

    weekContainer.appendChild(dayCard);
  }

  // Update the displayed current month and year
  displayCurrentMonthYear(selectedMonth, selectedYear);
}
// Function to get the day name based on the index (0 for Sunday, 1 for Monday, etc.)
function getDayName(index) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[index];
}

function updateScheduleDisplay() {

}

// // Call the function to generate the month and year dropdown when the page loads
// document.addEventListener('DOMContentLoaded', function () {

//   // displayEventList();
// });

// // Function to display the current month and year on the page
function displayCurrentMonthYear(month, year) {
  const monthYearDisplay = document.getElementById('current-month-year');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  monthYearDisplay.textContent = `${months[month]}, ${year}`;
}

// // Function to display the full details of an event in a modal
// function displayEventDetailsModal(event) {
//   const modalContent = document.getElementById('daycard-details');
//   modalContent.innerHTML = `
//     <h3>Event Details:</h3>
//     <p><strong>Title:</strong> ${event.title}</p>
//     <p><strong>Start Date:</strong> ${event.startDate}</p>
//     <p><strong>End Date:</strong> ${event.endDate}</p>
//     <p><strong>Notes:</strong> ${event.notes}</p>
//   `;
//   // Open the modal
//   modal.openDaycardDetails()
// }

// function updateCalendar() {
//   const monthDropdown = document.getElementById('month-dropdown');
//   const yearDropdown = document.getElementById('year-dropdown');
//   const selectedMonth = parseInt(monthDropdown.value);
//   const selectedYear = parseInt(yearDropdown.value);

//   const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

//   // Clear existing day cards
//   const weekContainer = document.querySelector('.week-container');
//   weekContainer.innerHTML = '';

//   // Generate new day cards based on the selected month and year
//   const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
//   const currentDate = new Date();

//   for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
//     const dayCard = document.createElement('div');
//     dayCard.className = 'day-card';

//     // Highlight the current date
//     if (dayNumber === currentDate.getDate() && selectedMonth === currentDate.getMonth() && selectedYear === currentDate.getFullYear()) {
//       dayCard.classList.add('current-date');
//     }

//     // Add click event listener to each day card
//     dayCard.addEventListener('click', function () {
//       displayEventDetails(dayNumber);
//     });
//     dayCard.innerHTML = `
//       <div class="day-number">${dayNumber}</div>
//       <div class="day-name">${getDayName((new Date(selectedYear, selectedMonth, dayNumber)).getDay())}</div>
//     `;
//     weekContainer.appendChild(dayCard);
//   }

//   // Update the displayed current month and year
//   displayCurrentMonthYear(selectedMonth, selectedYear);
// }

// // Function to get the day name based on the index (0 for Sunday, 1 for Monday, etc.)
// function getDayName(index) {
//   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   return daysOfWeek[index];
// }

// // Call the function to generate the month and year dropdown when the page loads
// document.addEventListener('DOMContentLoaded', function () {
//   generateMonthYearDropdown();
//   updateCalendar();
//   displayEventList();
// });

// // Function to handle logic for the Add and Edit buttons
// function handleAddEdit() {
//   const title = document.getElementById('title').value;
//   const startDate = document.getElementById('start-date').value;
//   const endDate = document.getElementById('end-date').value;
//   const notes = document.getElementById('notes').value;

//   // Check if the title and start date are provided
//   if (title && startDate) {
//     // Create a new event object
//     const event = {
//       title,
//       startDate,
//       endDate,
//       notes
//     };

//     // Store the event in localStorage
//     storeEvent(event);

//     // Display the list of days with events
//     displayEventList();

//     // Capture the day of the start date
//     const dayNumber = new Date(startDate).getDate();

//     // Display the event details for the specific day in a modal
//     displayEventDetails(dayNumber);

//     // Clear the form fields
//     modal.clear();
//     modal.close();
//     setModalShown(); // Set the flag when the modal is closed
//   } else {
//     alert("Title and start date are required!");
//   }
// }

// // Function to handle logic for the Add and Edit buttons
// function handleAddEdit() {
//   const title = document.getElementById('title').value;
//   const startDate = document.getElementById('start-date').value;
//   const endDate = document.getElementById('end-date').value;
//   const notes = document.getElementById('notes').value;

//   // Check if the title and start date are provided
//   if (title && startDate) {
//     // Create a new event object
//     const event = {
//       title,
//       startDate,
//       endDate,
//       notes
//     };

//     // Store the event in localStorage
//     storeEvent(event);

//     // Display the list of days with events
//     displayEventList();

//     // Capture the day of the start date
//     const dayNumber = new Date(startDate).getDate();

//     // Display the event details for the specific day in a modal
//     displayEventDetails(dayNumber);

//     // Clear the form fields
//     modal.clear();
//     modal.close();
//     setModalShown(); // Set the flag when the modal is closed

//     // Update the day card color when data is added
//     updateDayCardColor(dayNumber);
//   } else {
//     alert("Title and start date are required!");
//   }
// }
// Function to handle logic for the Add and Edit buttons
function handleAddEdit() {
  const title = document.getElementById('title').value;
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  const notes = document.getElementById('notes').value;

  // Check if the title and start date are provided
  if (title && startDate) {
    // Check if the modal is in edit mode (checkbox selected)
    const selectedCheckbox = document.querySelector('.event-checkbox:checked');
    if (selectedCheckbox) {
      // Update the existing event
      const eventIndex = parseInt(selectedCheckbox.dataset.eventIndex);
      updateEvent(eventIndex, title, startDate, endDate, notes);
    } else {
      // Create a new event object
      const event = {
        title,
        startDate,
        endDate,
        notes
      };

      // Store the event in localStorage
      storeEvent(event);
    }

    // Display the list of days with events
    displayEventList();

    // Clear the form fields
    modal.clear();
    modal.close();
    setModalShown(); // Set the flag when the modal is closed

    // Update the day card color when data is added or updated
    updateDayCardColor(new Date(startDate).getDate());
  } else {
    alert("Title and start date are required!");
  }
}

// Function to update an existing event in localStorage
function updateEvent(eventIndex, title, startDate, endDate, notes) {
  // Retrieve events from localStorage
  const events = JSON.parse(localStorage.getItem('events')) || [];

  // Check if the event index is valid
  if (eventIndex >= 0 && eventIndex < events.length) {
    // Update the existing event
    events[eventIndex] = {
      title,
      startDate,
      endDate,
      notes
    };

    // Save the updated list of events in localStorage
    localStorage.setItem('events', JSON.stringify(events));
  }
}

// Function to update day card color after form submission
function updateDayCardColorOnSubmit() {
  // Retrieve events from localStorage
  const events = JSON.parse(localStorage.getItem('events')) || [];

  // Get the date from the form
  const startDate = document.getElementById('start-date').value;
  const selectedDate = new Date(startDate);
  const dayNumber = selectedDate.getDate();

  // Update the day card color based on the presence of data
  updateDayCardColor(dayNumber);
}

// Function to update day card color after deleting an event
function updateDayCardColorAfterDelete() {
  // Retrieve events from localStorage
  const events = JSON.parse(localStorage.getItem('events')) || [];

  // Retrieve the day number from the modal content (assuming the modal is open)
  const dayNumberElement = document.querySelector('.edit-title');
  if (dayNumberElement) {
    const dayNumber = parseInt(dayNumberElement.dataset.dayNumber);

    // Update the day card color based on the presence of data
    updateDayCardColor(dayNumber);
  }
}

// // Function to update day card color based on the presence of data
// function updateDayCardColor(dayNumber) {
//   // Assuming you have a function to display the list of events, similar to displayEventList()
//   displayEventList();

//   // Get the corresponding day card element
//   const dayCardElement = document.getElementById(`day-card`);
//   if (dayCardElement) {
//     // Retrieve events from localStorage
//     const events = JSON.parse(localStorage.getItem('events')) || [];

//     // Check if there is data for the specified day
//     const hasData = events.some(event => {
//       const eventDate = new Date(event.startDate);
//       return eventDate.getDate() === dayNumber;
//     });

//     // Update the day card color based on the presence of data
//     if (hasData) {
//       dayCardElement.classList.add('has-data');
//     } else {
//       dayCardElement.classList.remove('has-data');
//     }
//   }
// }

// Function to update day card color based on the presence of data
function updateDayCardColor(dayNumber) {
  // Retrieve events from localStorage
  const events = JSON.parse(localStorage.getItem('events')) || [];

  // Get the corresponding day card element using the data-day-number attribute
  const dayCardElement = document.querySelector(`.day-card[data-day-number="${dayNumber}"]`);

  if (dayCardElement) {
    // Retrieve events from localStorage
    const events = JSON.parse(localStorage.getItem('events')) || [];

    // Check if there is data for the specified day
    const hasData = events.some(event => {
      const eventDate = new Date(event.startDate);
      return eventDate.getDate() === dayNumber;
    });

    // Update the day card color based on the presence of data
    if (hasData) {
      dayCardElement.classList.add('has-data');
    } else {
      dayCardElement.classList.remove('has-data');
    }
  }
  // Assuming you have a function to display the list of events, similar to displayEventList()
  displayEventList();
}

// Function to store an event in localStorage
function storeEvent(event) {
  // Retrieve existing events from localStorage
  const existingEvents = JSON.parse(localStorage.getItem('events')) || [];

  // Check if an event already exists for the selected day
  const existingEventIndex = existingEvents.findIndex(existingEvent => {
    const eventDate = new Date(existingEvent.startDate);
    return eventDate.getDate() === new Date(event.startDate).getDate();
  });

  // Update or add the new event to the list
  if (existingEventIndex !== -1) {
    existingEvents[existingEventIndex] = event;
  } else {
    existingEvents.push(event);
  }

  // Save the updated list of events in localStorage
  localStorage.setItem('events', JSON.stringify(existingEvents));
}

// // Function to display the list of days with events
// function displayEventList() {
//   // Retrieve events from localStorage
//   const events = JSON.parse(localStorage.getItem('events')) || [];

//   // Display events in the schedule display
//   const scheduleDisplay = document.getElementById('schedule-display');
//   // scheduleDisplay.innerHTML = '<h3>Events:</h3>';

//   // Iterate over events and display them
//   events.forEach(event => {
//     const eventHTML = `
//       <p><strong>Title:</strong> ${event.title}</p>
//       <p><strong>Date:</strong> ${event.startDate}</p>
//       <hr>
//     `;
//     scheduleDisplay.innerHTML += eventHTML;
//   });
// }
// Function to display the list of days with events
function displayEventList() {
  // Retrieve events from localStorage
  const events = JSON.parse(localStorage.getItem('events')) || [];
  // Display events in the schedule display
  const scheduleDisplay = document.getElementById('schedule-display');
  // scheduleDisplay.innerHTML = '<h3>Events:</h3>';
  // Clear previous content
  scheduleDisplay.innerHTML = '';
  // Iterate over events and display them
  // events.forEach(event => {
  //   const eventHTML = `
  //     <p><strong>Title:</strong> ${event.title}</p>
  //     <p><strong>Date:</strong> ${event.startDate}</p>
  //     <hr>
  //   `;
  //   scheduleDisplay.innerHTML += eventHTML;
  // });
  // Iterate over events and display them
  events.forEach((event, index) => {
    const eventHTML = `
      <p>
        <strong>Title:</strong> ${event.title}
        <strong>Date:</strong> ${event.startDate}
        <input type="checkbox" class="event-checkbox" data-event-index="${index}">
      </p>
      <p><button class="delete-btn" data-event-index="${index}">Delete</button></p>
      <hr>
    `;
    scheduleDisplay.innerHTML += eventHTML;
  });
  // Iterate through events and update day-cards with data class
  events.forEach(event => {
    const eventDate = new Date(event.startDate);
    const dayNumber = eventDate.getDate();
    const dayCard = document.querySelector(`.day-card[data-day-number="${dayNumber}"]`);

    if (dayCard) {
      dayCard.classList.add('has-data');
    }
  });

  // Add event listeners to delete buttons
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function () {
      const eventIndex = parseInt(button.dataset.eventIndex);
      deleteEvent(eventIndex);
    });
  });
}
// Additional functionality for buttons (Add, Edit, Delete, Cancel)
document.getElementById('add-btn').addEventListener('click', function () {
  console.log('Add button clicked');
  modal.clear();
  modal.open();
});

document.getElementById('edit-btn').addEventListener('click', function () {
  console.log('Edit button clicked');
  modal.edit();
});

function deleteEvent(eventIndex) {
  // Retrieve events from localStorage
  const events = JSON.parse(localStorage.getItem('events')) || [];

  // Remove the event from the array
  if (eventIndex >= 0 && eventIndex < events.length) {
    events.splice(eventIndex, 1);

    // Save the updated list of events in localStorage
    localStorage.setItem('events', JSON.stringify(events));

    // Display the list of days with events
    displayEventList();

    // Update the day card color to indicate no data
    // Assuming you have a function to update day card color, updateDayCardColor(dayNumber);
  } else {
    console.log("Invalid event index");
  }
}
// Function to display the full details of events for a specific day in a modal
function displayEventDetails(dayNumber) {
  // Retrieve events from localStorage
  const events = JSON.parse(localStorage.getItem('events')) || [];

  // Filter events for the selected day
  const eventsForDay = events.filter(event => {
    const eventDate = new Date(event.startDate);
    return eventDate.getDate() === dayNumber;
  });

  // Display the full details of events in a modal
  const modalContent = document.getElementById('daycard-details-content');
  modalContent.innerHTML = '<h3>Events for Day ' + dayNumber + ':</h3>';

  eventsForDay.forEach(event => {
    const eventHTML = `
      <p><strong>Title:</strong> <span class="edit-title" data-day-number="${dayNumber}">${event.title}</span></p>
      <p><strong>Start Date:</strong> ${JSON.stringify(event.startDate)}</p>
      <p><strong>End Date:</strong> ${JSON.stringify(event.endDate)}</p>
      <p><strong>Notes:</strong> ${event.notes}</p>
      <hr>
    `;
    modalContent.innerHTML += eventHTML;
  });

  // Open the "daycard-details" modal
  modal.openDaycardDetails();

  // // Make titles in daycard details clickable
  // const editTitles = document.querySelectorAll('.edit-title');
  // editTitles.forEach(title => {
  //   title.addEventListener('click', function () {
  //     // Extract day number from the clicked title
  //     const clickedDayNumber = parseInt(title.dataset.dayNumber);

  //     // Call the edit function with the clicked day number
  //     modal.edit(clickedDayNumber);
  //   });
  // });
  // Make titles in daycard details clickable
  const editTitles = document.querySelectorAll('.edit-title');
  editTitles.forEach(title => {
    title.addEventListener('click', function () {
      // Extract day number from the clicked title
      const clickedDayNumber = parseInt(title.dataset.dayNumber);

      // Call the edit function with the clicked day number
      modal.edit(clickedDayNumber);
    });
  });
}
// Function to handle checkbox changes
function handleCheckboxChange(eventIndex) {
  // Retrieve events from localStorage
  const events = JSON.parse(localStorage.getItem('events')) || [];

  // Check if the event index is valid
  if (eventIndex >= 0 && eventIndex < events.length) {
    const selectedEvent = events[eventIndex];

    // Update the modal with the selected event's data
    document.getElementById('title').value = selectedEvent.title;
    document.getElementById('start-date').value = selectedEvent.startDate;
    document.getElementById('end-date').value = selectedEvent.endDate;
    document.getElementById('notes').value = selectedEvent.notes;

    // Open the modal
    modal.open();
  }
}
document.addEventListener('DOMContentLoaded', function () {
  // Modal object and other code...

  // Show the modal if it's the first visit
  if (shouldShowModal()) {
    modal.open();
    modal.openDaycardDetails();
  } else {
    modal.close();
    modal.closeDaycardDetails();
    console.log("modal don't show");
  }
  // Make titles in schedule display clickable
  const scheduleDisplay = document.getElementById('schedule-display');
  scheduleDisplay.addEventListener('click', function (event) {
    if (event.target.tagName === 'STRONG') {
      // Extract day number from the clicked title
      const dayNumber = parseInt(event.target.dataset.dayNumber);
      // Call the edit function with the day number
      modal.edit(dayNumber);
    }
  });
  // Make titles in daycard details clickable
  const modalContent = document.getElementById('daycard-details-content');
  modalContent.addEventListener('click', function (event) {
    if (event.target.classList.contains('edit-title')) {
      // Extract day number from the clicked title
      const dayNumber = parseInt(event.target.dataset.dayNumber);

      // Call the edit function with the day number
      modal.edit(dayNumber);
    }
  });
  // Add event listeners to schedule day-cards
  const scheduleDayCards = document.querySelectorAll('.schedule-day-card');
  scheduleDayCards.forEach(dayCard => {
    dayCard.addEventListener('click', function () {
      // Extract day number from the clicked day-card
      const dayNumber = parseInt(dayCard.dataset.dayNumber);

      // Call the edit method in the modal, passing the day number
      modal.edit(dayNumber);
    });

  });
  generateMonthYearDropdown();
  updateCalendar();
  displayEventList(); // This event listener ensures that the DOM is fully loaded before executing the code
});