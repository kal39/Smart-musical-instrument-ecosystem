-- Core Table for all Musical Nodes
CREATE TABLE listings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    family VARCHAR(100) NOT NULL,
    hourly_rate DECIMAL(10, 2) NOT NULL,
    sale_price DECIMAL(10, 2) NOT NULL,
    is_rto_eligible BOOLEAN DEFAULT TRUE,
    condition_score INT DEFAULT 100,
    owner_id UUID DEFAULT gen_random_uuid(), -- Link to users table later
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tracking Rent-to-Own Progress
CREATE TABLE rto_contracts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    listing_id UUID REFERENCES listings(id),
    user_id UUID NOT NULL,
    total_term_months INT DEFAULT 12,
    paid_installments INT DEFAULT 0,
    monthly_payment DECIMAL(10, 2),
    status VARCHAR(50) DEFAULT 'active'
);

-- Seed Data (Matches your existing UI items)
INSERT INTO listings (name, family, hourly_rate, sale_price, condition_score)
VALUES 
('Steinway Model D', 'Piano', 85.00, 120000.00, 98),
('1964 Stratocaster', 'Guitar', 45.00, 15000.00, 92),
('Moog One 16-Poly', 'Synth', 35.00, 8000.00, 100);