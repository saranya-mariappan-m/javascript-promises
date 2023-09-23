/*
 * Function to retrieve the ISRO Spacecraft API call
 */
const getIsroSpaceCraft = async () => {

    const spaceCraftResponse = await fetch(
        'https://isro.vercel.app/api/spacecrafts',
        {
            method: 'GET',
        }
    );

    const isroData = await spaceCraftResponse.json();
    const spacecrafts = [...isroData.spacecrafts];
    const data = {};
    const divWrapper = document.createElement('div');
    divWrapper.classList.add('d-flex', 'flex-wrap', 'justify-content-between', 'm-4');
    spacecrafts.forEach(element => {
        const shuttleName = document.createElement('div');
        shuttleName.innerHTML = element.name;
        shuttleName.setAttribute('id', element.id);
        shuttleName.classList.add('m-3', 'col-3', 'p-2', 'text-center', 'border', 'border-primary-subtle');
        divWrapper.appendChild(shuttleName);
    });
    const mainContent = document.querySelector("section");

    mainContent.appendChild(divWrapper);
}
/*
 * Function to retrieve the ISRO Centers API call
 */
const getIsroCenters = async () => {

    const isroCenterResponse = await fetch(
        'https://isro.vercel.app/api/centres',
        {
            method: 'GET',
        }
    );

    const isroCenterData = await isroCenterResponse.json();
    const centersData = [...isroCenterData.centres];
    const data = {};
    const divWrapper = document.createElement('div');
    divWrapper.classList.add('d-flex', 'flex-wrap', 'justify-content-between', 'm-4');
    centersData.forEach(element => {

        const centerName = document.createElement('div');
        const centersDiv = document.createElement('div');

        const placeName = document.createElement('div');
        const stateName = document.createElement('div');

        centersDiv.innerHTML = element.name;
        placeName.innerHTML = element.Place;
        stateName.innerHTML = element.State;

        centerName.appendChild(centersDiv);
        centerName.appendChild(placeName);
        centerName.appendChild(stateName);

        centerName.setAttribute('id', element.id);
        centerName.classList.add('m-2', 'col-3', 'p-2', 'text-center', 'border', 'border-primary-subtle');
        placeName.classList.add('p-2', 'text-center');
        stateName.classList.add('p-2', 'text-center');

        divWrapper.appendChild(centerName);
    });
    const mainContent = document.querySelector("section");

    mainContent.appendChild(divWrapper);
    console.log(isroCenterData);
    console.log(data);
}
