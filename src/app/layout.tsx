import { ReactElement } from 'react';

export default function RootLayout(props: {
  children: ReactElement
}) {

  return (
    <html>
      <body style={{ background: 'transparent' }}>
        {props.children}
      </body>
    </html>
  );
}