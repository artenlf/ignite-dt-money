import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
      <HeaderContainer>
        <HeaderContent>
          <img src="/ignite-logo.svg" alt="" />
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
  )
}