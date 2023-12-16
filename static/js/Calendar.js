// // Check if the modal should be shown
// function shouldShowModal() {
//   // Use localStorage to check if the modal has been shown before
//   return localStorage.getItem('modalShown') !== 'true';
// }

// // Set the flag indicating that the modal has been shown
// function setModalShown() {
//   localStorage.setItem('modalShown', 'true');
// }

// document.addEventListener('DOMContentLoaded', function () {
//   // Modal object and other code...

//   // Show the modal if it's the first visit
//   if (shouldShowModal()) {
//     modal.open();
//   } else {
//     modal.close();
//     console.log("modal don't show");
//   }
// });
// // Modal object
// var modal = {
//   open: function () {
//     var overlay = document.getElementById('overlay');
//     overlay.style.display = 'flex';
//   },
//   close: function () {
//     var overlay = document.getElementById('overlay');
//     overlay.style.display = 'none';
//   },
//   submit: function () {
//     // Get input values
//     var title = document.getElementById('title').value;
//     var startTime = document.getElementById('start-time').value;
//     var endTime = document.getElementById('end-time').value;
//     var notes = document.getElementById('notes').value;

//     // Display schedule information in column-2
//     var scheduleDisplay = document.getElementById('schedule-display');
//     scheduleDisplay.innerHTML = `<p>Title: ${title}</p>
//                                  <p>Start Time: ${startTime}</p>
//                                  <p>End Time: ${endTime}</p>
//                                  <p>Notes: ${notes}</p>`;

//     this.close(); // Close the modal after submission
//   },
//   clear: function () {
//     // Clear input values
//     document.getElementById('title').value = '';
//     document.getElementById('start-time').value = '';
//     document.getElementById('end-time').value = '';
//     document.getElementById('notes').value = '';
//   },
//   edit: function () {
//     // Implement edit functionality here
//     // You can populate the modal fields with existing data for editing
//     // For example, you can retrieve the existing schedule information and set the input values

//     // Assuming you have some existing data to populate the modal fields
//     var existingData = {
//       title: 'Existing Title',
//       startTime: '10:00',
//       endTime: '12:00',
//       notes: 'Existing Notes',
//     };
//     // Set the modal fields with existing data
//     document.getElementById('title').value = existingData.title;
//     document.getElementById('start-time').value = existingData.startTime;
//     document.getElementById('end-time').value = existingData.endTime;
//     document.getElementById('notes').value = existingData.notes;

//     // Open the modal
//     this.open();
//   },

//   // delete: function () {
//   //   // Implement delete functionality here
//   //   // You can remove the displayed schedule information
//   //   var scheduleDisplay = document.getElementById('schedule-display');
//   //   scheduleDisplay.innerHTML = '';
//   //   this.close(); // Close the modal after deletion
//   // },
// };

// // Additional functionality for buttons (Add, Edit, Delete, Cancel)
// document.getElementById('add-btn').addEventListener('click', function () {
//   console.log('Add button clicked'); // Add this line
//   modal.clear(); // Clear previous data
//   modal.open();
//   setModalShown(); // Set the flag when the modal is closed
// });

// document.getElementById('edit-btn').addEventListener('click', function () {
//   console.log('Edit button clicked'); // Add this line
//   modal.edit();

// });

// // document.getElementById('delete-btn').addEventListener('click', function () {
// //   console.log('Delete button clicked'); // Add this line
// //   modal.delete();
// // });

// document.getElementById('cancel-btn').addEventListener('click', function () {
//   console.log('Cancel button clicked'); // Add this line
//   modal.clear();
//   modal.close();
//   setModalShown(); // Set the flag when the modal is closed
// });

// // Get all day-card elements
// var dayCards = document.querySelectorAll('.day-card');

// // Add click event listener to each day-card
// dayCards.forEach(function (card) {
//   card.addEventListener('click', function () {
//     modal.open();
//   });
// });

// // Function to get the number of days in a month
// function getDaysInMonth(month, year) {
//   return new Date(year, month + 1, 0).getDate();
// }

// // Function to dynamically generate day cards
// function generateDayCards() {
//   // Get the current month and year
//   var currentDate = new Date();
//   var currentMonth = currentDate.getMonth();
//   var currentYear = currentDate.getFullYear();

//   // Get the number of days in the current month
//   var daysInMonth = getDaysInMonth(currentMonth, currentYear);

//   // Get the container element
//   var calendarContainer = document.getElementById('calendar-container');

//   // Clear any existing content in the container
//   calendarContainer.innerHTML = '';

//   // Generate day cards for each day in the month
//   for (var dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
//     var dayCard = document.createElement('div');
//     dayCard.className = 'day-card';
//     dayCard.innerHTML = `
//           <div class="day-number">${dayNumber}</div>
//         `;
//     calendarContainer.appendChild(dayCard);
//   }
// }

// // Call the function to generate day cards when the page loads
// document.addEventListener('DOMContentLoaded', function () {
//   generateDayCards();
// });