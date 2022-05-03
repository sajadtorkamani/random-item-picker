import styled from 'styled-components'
import { palette } from '../constants'

/*
 * Layout components
 * */
export const Wrapper = styled.main`
  max-width: 500px;
  margin: 30px auto;
`

export const Container = styled.div`
  border: 1px solid ${palette.grey};
  padding: 25px 15px 30px;
`

/*
 * Base components
 * */
export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const Input = styled.input`
  border: 1px solid ${palette.grey};
  padding: 0 7px;
  height: 35px;
  width: 100%;
`

export const Button = styled.button`
  border: 1px solid ${palette.grey};
  height: 35px;
  min-width: 60px;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8
  }
`

/*
 * Custom components
 * */

export const AddItemWrapper = styled.div`
  display: flex;
`

export const ItemsList = styled.div`
  margin-top: 20px;
`

export const ClearItemsButton = styled.button`
  background: none; 
  border: none;
  color: ${palette.greyDark};
  text-decoration: underline;
  margin-top: 7px;
  &:hover {
    cursor: pointer;
  }
`