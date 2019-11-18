import React from 'react';
import { InputGroupAddon } from 'reactstrap';
import { FormRow, SelectContainer, StyledSelect, StyledInputGroup as InputGroup, StyledInputGroupText as InputGroupText  } from '../../../StyledComponents/Select';

const Select = ({items, name, value, handleSelectChange, title, centered, displayAddon, ...layout}) => {

    function handleChange(e){
        handleSelectChange(e.target.name, e.target.value);
    }
    
    return (
        <FormRow centered={centered}>
            <SelectContainer {...layout}>
                <InputGroup>
                    {displayAddon &&
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>{title}:</InputGroupText>
                        </InputGroupAddon>
                    }
                    <StyledSelect name={name}  onChange={handleChange} value={value}>
                        {
                            items.map(
                                 item => <option value={item} key={item}>{item}</option>
                            )
                        }
                    </StyledSelect>
                </InputGroup>
            </SelectContainer>
        </FormRow>
    );
}

export default Select;