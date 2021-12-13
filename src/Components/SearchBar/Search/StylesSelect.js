export const customStyles = {
    container: (provided, state) => ({
        ...provided,
        "width": "100%",
        'height': "100%",

    }),
    option: (provided, state) => ({
        ...provided,
        'color': '#000000',
        'height': '32px',
        "margin-top": 0
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        'width': '15%',
        'border-left': 'none',
        'span': {
            'display': 'none',
        }
    }),
    control: (base) => ({
        ...base,
        'background-color': 'rgba(255, 255, 255, 0)',
        'border-color': '#FFFFFF',
        '&:hover': {
            'background-color': 'rgba(255, 255, 255, 0)'
        },
        'border-with': '2px',
        "width": '100%',
        'height': "100%",
    }),
    placeholder: (base) => ({
        ...base,
        'color': '#FFFFFF',
    }),
}
export const stylesCountry = {
    control: (base) => ({
        ...base,
        'background-color': 'rgba(255, 255, 255, 0)',
        'border-color': '#FFFFFF',
        '&:hover': {
            'background-color': 'rgba(255, 255, 255, 0)'
        },
        'border-with': '2px',
        "width": '100%',
        'height': "100%",
        ' @media only screen and (min-width: 1260px)': {

            'border-radius': '4px 0 0 4px',
            'border-right': 'none',
        }
    })
}
export const stylesState = {
    control: (base) => ({
        ...base,
        'background-color': 'rgba(255, 255, 255, 0)',
        'border-color': '#FFFFFF',
        '&:hover': {
            'background-color': 'rgba(255, 255, 255, 0)'
        },
        'border-with': '2px',
        "width": '100%',
        'height': "100%",
        ' @media only screen and (min-width: 1260px)': {

            'border-radius': '0 4px 4px 0',
        }
    })
}
