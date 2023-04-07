function tip() {
    let amount = document.querySelector('#input_bill').value;
    let people = document.querySelector('#input_people').value;
    let service = document.querySelector('#services').value;

    if (amount === '' || people === '') {
        alert('Please enter valid values');
        return;
    }

    if (people === '1') {
        document.querySelector('#each').style.display = 'none';
    } else {
        document.querySelector('#each').style.display = 'block';
    }

    let total = (amount * service) / people;
    total = total.toFixed(2);
    
    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
}

