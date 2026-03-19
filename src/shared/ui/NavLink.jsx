import styled from 'styled-components';

const NavLinkStyled = styled.a`
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const NavLink = ({ href, children, ...props }) => {
  return (
    <NavLinkStyled href={href} {...props}>
      {children}
    </NavLinkStyled>
  );
};
