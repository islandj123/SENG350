public class ED
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Address { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public int Capacity { get; set; }
    public int Wait { get; set; }

    public ED(int id, string name, string address, double latitude, double longitude, int capacity, int wait)
    {
        Id = id;
        Name = name;
        Address = address;
        Latitude = latitude;
        Longitude = longitude;
        Capacity = capacity;
        Wait = wait;
    }

}