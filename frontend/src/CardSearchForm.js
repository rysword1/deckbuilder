import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';


function CardSearchForm({ cardSearch }) {

    const [formData, setFormData] = useState({
        name: "",
        colors: [],
        types: [],
        // dont make colorOptions an array it shouldnt be
        colorOptions: [],
        or: false
    });

    let query = "?q=";


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleColorsChecks = (e) => {
        const {value, checked} = e.target;
        const {colors} = formData;

        if (checked) {
            setFormData({
                ...formData,
                colors: [...colors, value]
            });
        } else {
            setFormData({
                ...formData,
                colors: colors.filter((e) => e !== value)
            });
        }
    }

    const handleTypesChecks = (e) => {
        const {value, checked} = e.target;
        const {types} = formData;

        if (checked) {
            setFormData({
                ...formData,
                types: [...types, value]
            });
        } else {
            setFormData({
                ...formData,
                types: types.filter((e) => e !== value)
            });
        }
    }

    // look at his function and decide what would be better if colorOptions is not an array
    const handleColorOptions = (e) => {
        setFormData({
            ...formData,
            colorOptions: e.target.value
        });
    }

    const handleOrChecks = (e) => {
        const {value, checked} = e.target;
        formData.or = checked;

        setFormData(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

            if (formData.name) {
                query += `name=${formData.name}`;
            }

            if (formData.types.length > 0) {
                if (formData.or) {
                    query += `+(type:${formData.types.join('+OR+type:')})`;
                } else {
                    query += `+(type:${formData.types.join('+type:')})`;
                }
            }

            if (formData.colors.length > 0) {
                if (formData.colorOptions === "only") {
                    query += `+color=${formData.colors.join("")}`;
                } else if (formData.colorOptions === "at-most") {
                    query+= `+color<=${formData.colors.join("")}`;
                } else if (formData.colorOptions === "including") {
                    query += `+color:${formData.colors.join("")}`;
                }
            }
        cardSearch(query);
        query = "?q=";
    }


    return(
    <Form onSubmit={handleSubmit}>
        
        <FormGroup>
            <h5>Name:</h5>
            <Input id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange} />
        </FormGroup>

        <FormGroup>
            <h5>Colors: </h5>

            <Label htmlFor='W' check>White:</Label>
            <Input  name="colors"
                type="checkbox"
                value="W"
                onChange={handleColorsChecks} />

            <Label htmlFor='U' check>Blue:</Label>
            <Input name="colors"
                type="checkbox"
                value="U"
                onChange={handleColorsChecks} />

            <Label htmlFor='B' check>Black:</Label>
            <Input name="colors"
                type="checkbox"
                value="B"
                onChange={handleColorsChecks} />
            

            <Label htmlFor='R' check>Red:</Label>
            <Input name="colors"
                type="checkbox"
                value="R"
                onChange={handleColorsChecks} />

            <Label htmlFor="G" check>Green:</Label> 
            <Input name="colors"
                type="checkbox"
                value="G"
                onChange={handleColorsChecks} />

            <Label htmlFor="C" checkf>Colorless:</Label>
            <Input name="colors"
                type="checkbox"
                value="C"
                onChange={handleColorsChecks} />
            
            <Label>Color Options:</Label>
            <select name="color-options" id="color-options" onChange={handleColorOptions}>
                <option value="">---Select an Option---</option>
                <option value="only">Only</option>
                <option value="at-most">At Most</option>
                <option value="including">Including</option>
            </select>
        </FormGroup>

        <FormGroup>
            <h5 htmlFor="types">Type:</h5>

            <Label htmlFor='Artifact'>Artifact:</Label>
            <Input name="types"
                type="checkbox"
                value="artifact"
                onChange={handleTypesChecks} />

            <Label htmlFor='Creature'>Creature:</Label>
            <Input name="types"
                type="checkbox"
                value="creature"
                onChange={handleTypesChecks} />

            <Label htmlFor='Enchantment'>Enchantment:</Label>
            <Input name="types"
                type="checkbox"
                value="enchantment"
                onChange={handleTypesChecks} />

            <Label htmlFor='Land'>Land:</Label>
            <Input name="types"
                type="checkbox"
                value="land"
                onChange={handleTypesChecks} />

            <Label htmlFor='BasicLand'>Basic Land:</Label>
            <Input name="types"
                type="checkbox"
                value="basic"
                onChange={handleTypesChecks} />

            <Label htmlFor='Legendary'>Legendary:</Label>
            <Input name="types"
                type="checkbox"
                value="legendary"
                onChange={handleTypesChecks} />

            <Label htmlFor='Planeswalker'>Planeswalker:</Label>
            <Input name="types"
                type="checkbox"
                value="planeswalker"
                onChange={handleTypesChecks} />

            <Label htmlFor='Sorcery'>Sorcery:</Label>
            <Input name="types"
                type="checkbox"
                value="sorcery"
                onChange={handleTypesChecks} />

            <Label htmlFor='Instant'>Instant:</Label>
            <Input name="types"
                type="checkbox"
                value="instant"
                onChange={handleTypesChecks} />

            <Label htmlFor='or'>Including These:</Label>
            <Input name="or"
                type="checkbox"
                value="or"
                onChange={handleOrChecks} />
        </FormGroup>
            
            <button>Search</button>
        </Form>
    );
}

export default CardSearchForm;