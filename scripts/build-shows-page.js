// each show: date, venue, location
// array of these shows
let showList = [
   
];

function buildShowsSection() {
    const showsContent = document.createElement('div');
    showsContent.classList.add('shows__content');
    
    const showsHeaderContainer = document.createElement('div');
    showsHeaderContainer.classList.add('shows__header-container');
    showsContent.append(showsHeaderContainer);

    const showsHeader = document.createElement('h2');
    const showTableHeader = document.createElement('div');
    showTableHeader.classList.add('show-table-header');
    showsHeader.innerText = 'Shows'
    showsHeaderContainer.append(showsHeader);
    showsHeaderContainer.append(showTableHeader);

    const dateLabel = document.createElement('p');
    const venueLabel = document.createElement('p');
    const locationLabel = document.createElement('p');
    const emptyLabel =  document.createElement('div');

    dateLabel.classList.add('show-label');
    dateLabel.innerText = 'DATE';

    venueLabel.classList.add('show-label');
    venueLabel.innerText = 'VENUE';

    locationLabel.classList.add('show-label');
    locationLabel.innerText = 'LOCATION';

    showTableHeader.append(dateLabel);
    showTableHeader.append(venueLabel);
    showTableHeader.append(locationLabel);
    showTableHeader.append(emptyLabel);

    const showsListContainer = document.createElement('ul');
    showsListContainer.classList.add('shows-container');

    showsContent.append(showsListContainer);

    const showsContainer = document.querySelector('.shows__container .section-content');
    console.log(showsContainer);
    showsContainer.append(showsContent);
}


function printShowTimes() {
    const showsContainerDiv = document.getElementsByClassName('shows-container')[0];

    showList.forEach(show => {
        const showElement = createShowDOMElement(show);
        showsContainerDiv.append(showElement);
    });
}

function createShowDOMElement(show) {
    const showItemDiv = document.createElement('li');
    showItemDiv.classList = 'show-item';

    const showDateDiv = document.createElement('div');
    const showDateLabel = document.createElement('p');
    showDateLabel.classList = 'show-label';
    showDateLabel.innerText = 'DATE';
    

    const showDateValue = document.createElement('p');
    showDateValue.classList = 'show-value show-date';
    showDateValue.innerText = new Date(show.date).toDateString();

    showDateDiv.append(showDateLabel);
    showDateDiv.append(showDateValue);

    const showVenueDiv = document.createElement('div');
    const showVenueLabel = document.createElement('p');
    showVenueLabel.classList = 'show-label';
    showVenueLabel.innerText = 'VENUE';

    console.log(show.place)

    const showVenueValue = document.createElement('p');
    showVenueValue.classList = 'show-value';
    showVenueValue.innerText = show.place;

    showVenueDiv.append(showVenueLabel);
    showVenueDiv.append(showVenueValue);


    const showLocationDiv = document.createElement('div');
    const showLocationLabel = document.createElement('p');
    showLocationLabel.classList = 'show-label';
    showLocationLabel.innerText = 'LOCATION';

    const showLocationValue = document.createElement('p');
    showLocationValue.classList = 'show-value';
    showLocationValue.innerText = show.location;

    showLocationDiv.append(showVenueLabel);
    showLocationDiv.append(showLocationValue);

    const showButtonDiv = document.createElement('div');
    const showButton = document.createElement('button');
    showButton.innerText = 'BUY TICKETS';
    showButton.type = 'submit';
    showButtonDiv.append(showButton);

    showItemDiv.append(showDateDiv);
    showItemDiv.append(showVenueDiv);
    showItemDiv.append(showLocationDiv);
    showItemDiv.append(showButtonDiv);

    showItemDiv.addEventListener('click', () => {
        resetSelectedState();
        showItemDiv.classList.add('show-item__selected');        
    })

    return showItemDiv;
}

function resetSelectedState() {
    const showsList = document.querySelectorAll('.show-item');
    showsList.forEach((show) => {
        show.classList.remove('show-item__selected');
    });
}

buildShowsSection();

printShowTimes();

const API_KEY="4b619585-4ee8-43f0-8390-31e316e5ad60"; 

let populateAPI= new BandSiteApi(API_KEY);

let populateShows = async () => {
    try {
        let retrievedShows = await populateAPI.getShows();
        showList=retrievedShows;
        printShowTimes();
    } catch (error) {
        console.log(error);
    }

}

populateShows();