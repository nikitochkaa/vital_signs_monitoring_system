'use client'

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";

interface Measurement {
  heartRate: number;
  oxygenSaturation: number;
  measurementTime: string;
}

export default function Measurements() {
  const params = useParams<{ date: string; }>()
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(params["date"]);

  const dates = ["2024-06-04", "2024-06-09", "2024-06-11"];

  useEffect(() => {
    if (selectedDate) {
      setIsLoading(true);
      fetch(`http://localhost:8080/api/medical-records?username=asdasdasd&password=asdasdasd&date=${selectedDate}`)
        .then(response => response.json())
        .then(data => {
          setMeasurements(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Failed to fetch measurements:', error);
          setIsLoading(false);
        });
    }
  }, [selectedDate]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Measurements for {selectedDate}</h1>
      <div>
        <label htmlFor="date-select" className="block text-lg font-medium">Select a date:</label>
        <select
          id="date-select"
          aria-placeholder={selectedDate ? selectedDate : "Select a date"}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="mb-4 p-2 border rounded"
        >
          {dates.map(date => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        measurements.length > 0 ? (
          <ul>
            {measurements.map((measurement, index) => (
              <li key={index} className="p-2 border-b">
                <strong>Heart rate:</strong> {measurement.heartRate} bpm - <strong>Oxygen saturation:</strong> {measurement.oxygenSaturation}% - <strong>Time:</strong> {measurement.measurementTime.split("T")[1]}
              </li>
            ))}
          </ul>
        ) : <p>No measurements found for this date.</p>
      )}
    </div>
  );
}
