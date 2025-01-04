

const EventDetail = () => {


     return (
          <>
          
                {selectedEvent && (
                  <Dialog open onClose={handleDialogClose}>
                    <DialogTitle>
                      {selectedEvent.title} - Program Outline( Conductor: {selectedEvent.conductor}
                      )
                    </DialogTitle>
                    <DialogContent>
                      {selectedEvent.programOutline.map((item, index) => (
                        <div key={index} className="mb-4">
                          <Typography variant="body1">
                            <strong>{item.activity}</strong>:{item.responsible}(
                            {item.time})
                          </Typography>
                        </div>
                      ))}
                    </DialogContent>
                    <div className="p-4">
                      <Button
                        onClick={handleDialogClose}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Close
                      </Button>
                    </div>
                  </Dialog>
                )}
          </>
     )
}