'use client';

import React from 'react';
import NiceModal from '@ebay/nice-modal-react';

export const ClientOnlyModalProvider = ({ children }: { children: React.ReactNode }) => {
  return <NiceModal.Provider>{children}</NiceModal.Provider>;
};
