'use client'

import dynamic from 'next/dynamic'

// UserManagement 컴포넌트를 동적으로 import (클라이언트 사이드에서만 렌더링)
const UserManagement = dynamic(() => import('../components/UserManagement'), {
  ssr: false,
  loading: () => <div style={{ textAlign: 'center', padding: '40px' }}>로딩 중...</div>
})

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <UserManagement />
    </main>
  )
}
