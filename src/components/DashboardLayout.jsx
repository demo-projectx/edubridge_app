<div className="min-h-screen pt-16">
  <Navbar />
  <div className="flex">
    <Sidebar />
    <main className="flex-1">
      {children}
    </main>
  </div>
  <Footer />
</div> 