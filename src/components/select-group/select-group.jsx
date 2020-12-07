import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontFamily: 'Quicksand',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const DivTudo = styled.div`
   padding: 0 16%;
   margin-top: 20px;
`;

const styles = {
  control: base => ({
    ...base,
    fontFamily: "Helvetica"
  }),
  menu: base => ({
    ...base,
    fontFamily: "Helvetica"
  })
};


export const SelectGroup = (props) => {

  return(
    <DivTudo>
      <Select
        defaultValue={{ value: 'default', label: 'Selecione professores que ministram essa disciplina' }}
        options={props.professores}
        className="select"
        styles={styles}
        onChange={props.onChange}
      />
    </DivTudo>
  )
};